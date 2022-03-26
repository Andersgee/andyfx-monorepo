import NextImage from "next/image";

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

interface Props {
  src: StaticImageData;
  alt: string;
  width?: string;
  height?: string;
  priority?: boolean;
  className?: string;
}

/**
 * optimized image from StaticImageData (not string).
 *
 * *optional:* width and height
 *
 * (only .jpg, .png and .webp)
 *
 * ```js
 * import pic from 'public/images/me.png'
 * //pic is StaticImageData
 * ```
 */
export function ImageStatic({ src, alt, width, height, priority = false, className }: Props) {
  return <NextImage src={src} alt={alt} className={className} width={width} height={height} priority={priority} />;
}
