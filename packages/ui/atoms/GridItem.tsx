import styled from "styled-components";

interface Props {
  className?: string;
  w?: number;
  h?: number;
  x?: number | "auto";
  y?: number | "auto";
  children: React.ReactNode;
}

/**
 * A div that takes up width x height inside a display: grid container
 *
 * optionally place at x,y position in grid.
 */
export function GridItem({ w = 1, h = 1, x = "auto", y = "auto", className, children }: Props) {
  return (
    <Container className={className} x={x} y={y} w={w} h={h}>
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
  position: relative;
  grid-column: ${(props) => props.x} / span ${(props) => props.w};
  grid-row: ${(props) => props.y} / span ${(props) => props.h};
`;
