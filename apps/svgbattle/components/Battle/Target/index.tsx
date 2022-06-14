import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { usePutImageData } from "hooks/usePutImageData";
import Header from "./Header";
import type { Target } from "@andyfx/svgbattle-api/src/models/target";
import { useImageDataFromSvg } from "hooks/useImageDataFromSvg";
import { useCodeContext } from "contexts/Code";

type Props = {
  target: Target;
  className?: string;
};

export default function TargetComponent({ target, className }: Props) {
  const { setCode } = useCodeContext();
  const imageData = useImageDataFromSvg(target.svg, target.width, target.height);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  usePutImageData(canvasRef, imageData);

  useEffect(() => setCode(target.placeholder), [setCode, target]);

  return (
    <Container className={className}>
      <div>
        <Header />
        <Canvas ref={canvasRef} width={target.width} height={target.height} />
      </div>
    </Container>
  );
}

const Canvas = styled.canvas`
  border: 1px solid ${(props) => props.theme.color.text.disabled};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
