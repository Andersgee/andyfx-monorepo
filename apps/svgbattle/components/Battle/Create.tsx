import React, { useState } from "react";
import styled from "styled-components";
import Editor from "./Editor";
import Output from "./Output/Create";
import type { Target } from "targets";

type Props = {
  className?: string;
};

export default function Create({ className }: Props) {
  const [width, setWidth] = useState(240);
  const [height, setHeight] = useState(240);

  const targetx: Target = {
    colors: ["color1", "color2"],
    description: "description",
    width: 240,
    height: 240,
    placeholder: "placeholder",
    svg: "svg",
    title: "title",
  };

  const createdTarget = {
    width: 240,
    height: 240,
  } as Target;

  return (
    <Container w={createdTarget.width} className={className}>
      <StyledEditor target={createdTarget} language="svg" />
      <StyledOutput target={createdTarget} />
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
    "output" auto
    "editor" auto
    / 1fr;

  @media only screen and (min-width: ${(props) => props.w * 3 + 16}px) {
    grid-template:
      "information information" auto
      "editor output" auto
      / 1fr auto;
  }
`;

const StyledEditor = styled(Editor)`
  grid-area: editor;
`;

const StyledOutput = styled(Output)`
  grid-area: output;
`;
