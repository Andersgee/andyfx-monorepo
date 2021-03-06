import React, { useRef } from "react";
import styled from "styled-components";
import { useCodeContext } from "contexts/Code";
import { usePutImageData } from "hooks/usePutImageData";
import { useImageDataFromSvg } from "hooks/useImageDataFromSvg";
import Header from "./CreateHeader";
import type { Target } from "@andyfx/svgbattle-api/src/models/target";

type Props = {
  target: Target;
  className?: string;
};

export default function Output({ target, className }: Props) {
  const { sanitizedCode } = useCodeContext();
  const width = target.width;
  const height = target.height;

  const imageData = useImageDataFromSvg(sanitizedCode, width, height);

  const outputCanvasRef = useRef<HTMLCanvasElement>(null);
  usePutImageData(outputCanvasRef, imageData);

  return (
    <Container className={className}>
      <div>
        <Header />
        <OutputCanvas ref={outputCanvasRef} aria-label="output" width={width} height={height} />
      </div>
    </Container>
  );
}

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.color.text.disabled};
`;

interface CanvasProps {
  readonly isDebug: boolean;
}

const OutputCanvas = styled.canvas`
  color: ${(props) => props.theme.color.text.secondary};
  display: block;
  border: 1px solid ${(props) => props.theme.color.text.disabled};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
