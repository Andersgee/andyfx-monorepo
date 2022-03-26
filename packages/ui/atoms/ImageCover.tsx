import NextImage from "next/image";
import styled from "styled-components";

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

interface Props {
  src: string | StaticImageData;
  alt: string;
  width: string;
  height: string;
  position?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Fills (covers) width and height.
 *
 * width and height must be supplied.
 *
 * default position="center center"
 */
export function ImageCover({
  src,
  alt,
  width,
  height,
  position = "center center",
  priority = false,
  className,
}: Props) {
  return (
    <Container width={width} height={height} className={className}>
      <NextImage src={src} alt={alt} layout="fill" objectFit="cover" objectPosition={position} priority={priority} />
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
