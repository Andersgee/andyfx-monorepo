interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * A section is a thematic grouping of content, typically with a heading.
 *
 * Chapters,
 * Introduction,
 * News items,
 * Contact information
 */
export function Section({ children, className }: Props) {
  return <section className={className}>{children}</section>;
}
