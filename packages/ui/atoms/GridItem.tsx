import styled from "styled-components";

type Props = {
  className?: string;
  width?: number;
  height?: number;
  x?: number | "auto";
  y?: number | "auto";
  children: React.ReactNode;
};

/**
 * A div that spans `width`, `height` inside a display: grid container
 *
 * optionally place at position `x`, `y` in grid.
 */
export default function GridItem({ width = 1, height = 1, x = "auto", y = "auto", className, children }: Props) {
  return (
    <Container className={className} x={x} y={y} w={width} h={height}>
      {children}
    </Container>
  );
}

interface ContainerProps {
  w: number;
  h: number;
  x: number | "auto";
  y: number | "auto";
}

const Container = styled.div<ContainerProps>`
  grid-column: ${(props) => props.x} / span ${(props) => props.w};
  grid-row: ${(props) => props.y} / span ${(props) => props.h};
`;
