import { useUserContext } from "contexts/User";
import api from "lib/api";
import React from "react";
import styled from "styled-components";
import { Button, Tooltip, Code } from "ui/atoms";
import { ContentCopy, Delete, Add } from "ui/icons";

const copyToClipboard = (str: string) => {
  return window?.navigator.clipboard.writeText(str);
};

type Props = {
  className?: string;
};

const usage_code = `async function getAccessToken() {
  const body = {refreshToken: "YOUR_TOKEN_HERE"}

  const data = await fetch("https://api.andyfx.se/token", {
    method: "POST", 
    body: JSON.stringify(body)
  }).then(res=>res.json())
  
  console.log(data)
  return data.accessToken
}

async function changeMyName(newName, access_token) {
  const updatedUser = {name: newName}

  const data = await fetch("https://api.andyfx.se/user", {
    method: "PATCH", 
    headers: {
      Authorization: \`Bearer \${access_token}\`
    }, 
    body: JSON.stringify(updatedUser)
  }).then(res=>res.json())
  
  console.log(data)
  return data
}`;

export default function TokenSection({ className }: Props) {
  const { token, setToken } = useUserContext();

  const getRefreshToken = () => {
    api
      .get("/token/generate")
      .then((json) => {
        const { refreshToken } = json;
        setToken({ refreshToken });
      })
      .catch((err) => console.log(err));
  };

  const getAccessToken = () => {
    api
      .post("/token", { refreshToken: token?.refreshToken })
      .then((json) => {
        console.log("getAccessToken, json:", json);
      })
      .catch((err) => console.log(err));
  };

  const revokeRefreshToken = () => {
    api
      .remove("/token")
      .then((json) => {
        setToken(undefined);
        console.log("revokeRefreshToken, json:", json);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className={className}>
      <Title>API key</Title>
      {token ? (
        <>
          <Token>
            <TokenString>{token.refreshToken}</TokenString>

            <Tooltip label="copy">
              <button onClick={() => copyToClipboard("hej hopp").then(() => console.log("copied"))}>
                <ContentCopy />
              </button>
            </Tooltip>
            <Tooltip label="revoke">
              <button onClick={revokeRefreshToken}>
                <Delete />
              </button>
            </Tooltip>
          </Token>

          <Button onClick={getAccessToken}>getAccessToken</Button>
          <Code code={usage_code} language="javascript" />
        </>
      ) : (
        <>
          <Tooltip label="get refresh token">
            <button onClick={getRefreshToken}>
              <Add />
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
