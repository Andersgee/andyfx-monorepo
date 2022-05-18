import NextImage from "next/image";
import styled from "styled-components";

/*
export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}
*/

interface Props {
  src: string | StaticImageData;
  alt: string;
  aspectRatio: number;
  priority?: boolean;
  className?: string;
}

/**
 * Fits width of parent.
 *
 * aspectRatio must be supplied.
 */
export default function Image({ src, alt, aspectRatio, className, priority = false }: Props) {
  const height = `${100 / aspectRatio}%`;
  return (
    <Container className={className}>
      <NextImage
        src={src}
        alt={alt}
        layout="responsive"
        objectFit="contain"
        width="100%"
        height={height}
        priority={priority}
      />
    </Container>
  );
}

const Container = styled.div`
  display: block; //important for proper layout="responsive" behaviour. (block is default for div but just to be explicit)
  width: 100%;
  overflow: hidden;
`;
