import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useCodeContext } from "contexts/Code";
import { useCompareImageData } from "hooks/useCompareImageData";
import { usePutImageData } from "hooks/usePutImageData";
import { useImageDataFromSvg } from "hooks/useImageDataFromSvg";
import Header from "./Header";
import type { Target } from "targets";

type Props = {
  target: Target;
  className?: string;
};

export default function Output({ target, className }: Props) {
  const { sanitizedCode, setPercent } = useCodeContext();
  const width = target.width;
  const height = target.height;

  const targetImageData = useImageDataFromSvg(target.svg, width, height);
  const imageData = useImageDataFromSvg(sanitizedCode, width, height);

  const { percent, imageData: debugImageData } = useCompareImageData(imageData, targetImageData);

  useEffect(() => {
    setPercent(percent);
  }, [percent, setPercent]);

  const outputCanvasRef = useRef<HTMLCanvasElement>(null);
  usePutImageData(outputCanvasRef, imageData);

  const debugCanvasRef = useRef<HTMLCanvasElement>(null);
  usePutImageData(debugCanvasRef, debugImageData);

  const [isDebug, setIsDebug] = useState(false);
  return (
    <Container className={className}>
      <div>
        <Header />
        <Button onClick={() => setIsDebug((prev) => !prev)} aria-label="toggle code output mode" role="presentation">
          <OutputCanvas ref={outputCanvasRef} isDebug={isDebug} aria-hidden="true" width={width} height={height} />
          <DebugCanvas ref={debugCanvasRef} isDebug={isDebug} aria-hidden="true" width={width} height={height} />
        </Button>
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

const DebugCanvas = styled.canvas<CanvasProps>`
  display: ${(props) => (props.isDebug ? "block" : "none")};
`;

const OutputCanvas = styled.canvas<CanvasProps>`
  display: ${(props) => (props.isDebug ? "none" : "block")};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
