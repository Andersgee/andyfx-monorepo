import React from "react";
import styled from "styled-components";
import Editor from "./Editor";
import Output from "./Output";
import Colors from "./Colors";
import TargetComponent from "./Target";
import Information from "./Information";
import type { Target } from "@andyfx/svgbattle-api/src/models/target";

type Props = {
  target: Target;
  className?: string;
};

export default function Battle({ target, className }: Props) {
  return (
    <Container w={target.width} className={className}>
      <StyledTarget target={target} />
      <StyledColors target={target} />
      <StyledEditor target={target} language="svg" />
      <StyledOutput target={target} />
      <StyledInformation target={target} />
    </Container>
  );
}

interface ContainerProps {
  readonly w: number;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  gap: 1rem;

  grid-template:
    "information" auto
    "colors" auto
    "target" auto
    "output" auto
    "editor" auto
    / 1fr;

  @media only screen and (min-width: ${(props) => props.w * 2 + 16 * 3 + 8}px) {
    grid-template:
      "information information" auto
      ". colors" auto
      "output target" auto
      "editor editor" auto
      / 1fr 1fr;
  }

  @media only screen and (min-width: ${(props) => props.w * 3 + 16 * 4 + 16 * 4}px) {
    grid-template:
      "information information information" auto
      "editor output target" auto
      "editor . colors" auto
      "editor . ." auto
      / 1fr auto auto;
  }
`;

const StyledEditor = styled(Editor)`
  grid-area: editor;
`;

const StyledOutput = styled(Output)`
  grid-area: output;
`;

const StyledTarget = styled(TargetComponent)`
  grid-area: target;
`;

const StyledInformation = styled(Information)`
  grid-area: information;
`;

const StyledColors = styled(Colors)`
  grid-area: colors;
`;
