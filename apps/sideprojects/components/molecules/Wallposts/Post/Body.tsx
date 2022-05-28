import React from "react";
import styled from "styled-components";
import { langFromText, removeFirstWord } from "../utils";
import { Code as DefaultCode } from "ui/atoms";

type Props = {
  text: string;
  className?: string;
};

export default function Body({ text, className }: Props) {
  const parts = text.split("```");
  return (
    <Container className={className}>
      {parts.map((part, i) => {
        const lang = langFromText(part);
        if (lang) {
          return <Code key={i} code={removeFirstWord(part)} language={lang} />;
        } else {
          return <pre key={i}>{part}</pre>;
        }
      })}
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.color.paper};
  box-shadow: ${(props) => props.theme.shadow[1]};
`;

const Code = styled(DefaultCode)`
  margin-top: 0.25rem;

  box-shadow: ${(props) => props.theme.shadow[2]};
  > code {
    padding: 0.5rem;
  }
`;
