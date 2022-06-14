import React from "react";
import styled from "styled-components";
import type { Target } from "@andyfx/svgbattle-api/src/models/target";

type Props = {
  className?: string;
  target: Target;
};

export default function Information({ target, className }: Props) {
  return (
    <Container className={className}>
      <div>
        <P>Try to make output the same as target. Click output to show incorrect pixels.</P>
        <P>{target.title}</P>
        <P>{target.description} </P>
        <a href="https://www.w3.org/TR/SVG2/">spec</a>
      </div>
    </Container>
  );
}

const P = styled.p``;

const Container = styled.div`
  display: grid;
  place-items: center;
`;
