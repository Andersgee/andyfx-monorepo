import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  text: string;
};

export default function Body({ text, className }: Props) {
  return (
    <Container className={className}>
      <pre>{text}</pre>
    </Container>
  );
}

const Container = styled.div``;
