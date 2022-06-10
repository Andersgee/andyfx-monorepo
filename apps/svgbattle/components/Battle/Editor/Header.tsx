import React from "react";
import styled from "styled-components";
import type { Target } from "targets";

type Props = {
  target: Target;
  className?: string;
};

export default function Header({ target, className }: Props) {
  return (
    <Container className={className}>
      <P>{`viewbox ${target.width} ${target.height}`}</P>
    </Container>
  );
}

const P = styled.p`
  padding-bottom: 0.25rem;
`;

const Container = styled.div``;
