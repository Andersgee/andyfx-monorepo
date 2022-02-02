import NextImage from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  width: string;
  height: string;
  position?: string;
  className?: string;
}

/**
 * Fills (covers) width and height.
 *
 * width and height must be supplied.
 */
export function ImageCover({ src, alt, width, height, position = "center center", className }: Props) {
  return (
    <Container width={width} height={height} className={className}>
      <NextImage src={src} alt={alt} layout="fill" objectFit="cover" objectPosition={position} />
    </Container>
  );
}

interface ContainerProps {
  readonly width: string;
  readonly height: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
`;
