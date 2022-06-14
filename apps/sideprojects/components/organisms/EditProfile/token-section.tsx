import { useTokenContext } from "contexts/Token";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Tooltip, Code, ClipboardCopyButton } from "@andyfx/ui/atoms";
import { ContentCopyIcon, DeleteIcon, AddIcon } from "@andyfx/ui/icons";

type Props = {
  className?: string;
};

const usage_code = `async function getAccessToken() {
  const res = await fetch("https://api.andyfx.se/token", { 
    headers: { Authorization: "YOUR_REFRESH_TOKEN" } 
  });
  const { accessToken, expires_in_seconds } = await res.json();
  return accessToken
}

async function changeMyName(access_token) {
  const update = {name: "YOUR NEW NAME"}

  const res = await fetch("https://api.andyfx.se/user", {
    method: "PATCH", 
    headers: { Authorization: \`Bearer \${access_token}\`}, 
    body: JSON.stringify(update)
  })
}`;

const rtf1 = new Intl.RelativeTimeFormat("sv", { style: "narrow" });

export default function TokenSection({ className }: Props) {
  const { refreshToken, accessToken, expireTime, revokeRefreshToken, getRefreshToken, getAccessToken } =
    useTokenContext();
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setRemainingSeconds(expireTime ? Math.round(0.001 * (expireTime - Date.now())) : 0),
      1000
    );
    return () => clearInterval(timer);
  }, [expireTime]);

  return (
    <Container className={className}>
      <Title>API key</Title>
      {refreshToken ? (
        <>
          <Token>
            <TokenString>refreshToken: {refreshToken}</TokenString>

            <ClipboardCopyButton data={refreshToken}>
              <ContentCopyIcon />
            </ClipboardCopyButton>

            <button onClick={revokeRefreshToken}>
              <DeleteIcon />
            </button>
          </Token>

          <Button onClick={getAccessToken}>getAccessToken</Button>

          {accessToken && (
            <>
              <Token>
                <TokenString>accessToken: {accessToken}</TokenString>

                <ClipboardCopyButton data={accessToken}>
                  <ContentCopyIcon />
                </ClipboardCopyButton>
              </Token>
              <p>expires in {Math.round(remainingSeconds / 60)} minutes</p>
            </>
          )}
          <Code code={usage_code} language="javascript" />
        </>
      ) : (
        <>
          <Tooltip label="get refresh token">
            <button onClick={getRefreshToken}>
              <AddIcon />
            </button>
          </Tooltip>
        </>
      )}
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2``;

const Token = styled.div`
  display: flex;
  align-items: center;
`;

const TokenString = styled.div`
  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
`;
