import React, { useState } from "react";
import styled from "styled-components";
import api from "lib/api";
import { Button, Textarea } from "@andyfx/ui/atoms";

type Props = {
  recieverId: string;
  onSend?: () => void;
  className?: string;
};

export default function Write({ recieverId, onSend, className }: Props) {
  const [isWriting, setIsWriting] = useState(false);
  const [value, setValue] = useState("");

  const handleSend = async () => {
    try {
      const reply = {
        recieverId: recieverId,
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        text: value,
      };
      await api.post(`/reply/${recieverId}`, reply);
      setValue("");
      setIsWriting(false);
      onSend && onSend();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className={className}>
      <Header>
        <Button onClick={() => setIsWriting((prev) => !prev)}>REPLY</Button>
      </Header>
      {isWriting && (
        <>
          <Textarea
            autoFocus={true}
            autoComplete="off"
            spellCheck={false}
            value={value}
            rows={2}
            className={className}
            onChange={(e) => setValue(e.target.value)}
          />
          <SendButton onClick={handleSend}>send</SendButton>
        </>
      )}
    </Container>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  margin-left: 2rem;
`;

const SendButton = styled(Button)`
  margin: 0rem 0 0 0;
`;
