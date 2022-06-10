import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <Container className={className}>
      <P>Target</P>
    </Container>
  );
}

const P = styled.p`
  padding-bottom: 0.25rem;
`;

const Container = styled.div`
  text-align: center;
`;
