import React, { useState } from "react";
import styled from "styled-components";
import api from "lib/api";
import { Button, Textarea } from "@andyfx/ui/atoms";
import Preview from "./Preview";

type Props = {
  recieverId: string;
  onSend?: () => void;
  className?: string;
};

export default function Write({ recieverId, onSend, className }: Props) {
  const [value, setValue] = useState("");

  const handleSend = async () => {
    try {
      const post = { createdAt: Date.now(), modifiedAt: Date.now(), recieverId, text: value };
      await api.post("/post", post);
      setValue("");
      onSend && onSend();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className={className}>
      <StyledTextarea
        autoFocus={true}
        autoComplete="off"
        spellCheck={false}
        value={value}
        cols={80}
        rows={5}
        className={className}
        onChange={(e) => setValue(e.target.value)}
      />

      {value && <SendButton onClick={handleSend}>send</SendButton>}
      {value && <Preview text={value} initialShow={false} />}
    </Container>
  );
}

const StyledTextarea = styled(Textarea)`
  max-width: 80ch;
`;

const Container = styled.div``;

const SendButton = styled(Button)`
  margin: 0rem 0 0 0;
`;
