import React, { useState } from "react";
import styled from "styled-components";
import Editor from "./Editor";
import Output from "./Output/Create";
import type { Target } from "@andyfx/svgbattle-api/src/models/target";
import Publish from "./Publish/Publish";

type Props = {
  className?: string;
};

export default function Create({ className }: Props) {
  const [width, setWidth] = useState(240);
  const [height, setHeight] = useState(240);

  const createdTarget = {
    width: 240,
    height: 240,
  } as Target;

  return (
    <Container w={createdTarget.width} className={className}>
      <StyledEditor target={createdTarget} language="svg" />
      <StyledOutput target={createdTarget} />
      <StyledPublish />
    </Container>
  );
}

const StyledPublish = styled(Publish)`
  grid-area: publish;
`;

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
    "output" auto
    "editor" auto
    "publish" auto
    / 1fr;

  @media only screen and (min-width: ${(props) => props.w * 3 + 16}px) {
    grid-template:
      "information information" auto
      "editor output" auto
      "publish publish" auto
      / 1fr auto;
  }
`;

const StyledEditor = styled(Editor)`
  grid-area: editor;
`;

const StyledOutput = styled(Output)`
  grid-area: output;
`;
