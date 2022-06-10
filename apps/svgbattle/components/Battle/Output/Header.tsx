import React from "react";
import styled from "styled-components";
import { useCodeContext } from "contexts/Code";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  const { percent } = useCodeContext();
  return (
    <Container className={className}>
      <P>Output ({percent}% correct)</P>
    </Container>
  );
}

const P = styled.p`
  padding-bottom: 0.25rem;
`;

const Container = styled.div`
  text-align: center;
`;
