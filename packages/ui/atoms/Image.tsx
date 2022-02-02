import NextImage from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  aspectRatio: number;
  className?: string;
}

/**
 * Fits width of parent.
 *
 * aspectRatio must be supplied.
 */
export function Image({ src, alt, aspectRatio, className }: Props) {
  const height = `${100 / aspectRatio}%`;
  return (
    <Container className={className}>
      <NextImage src={src} alt={alt} layout="responsive" objectFit="contain" width="100%" height={height} />
    </Container>
  );
}

const Container = styled.div`
  display: block; //important for proper layout="responsive" behaviour. (block is default for div but just to be explicit)
  width: 100%;
  overflow: hidden;
`;
