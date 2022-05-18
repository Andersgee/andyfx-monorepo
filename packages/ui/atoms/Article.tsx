type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * An article should make sense on its own, and it should be possible to distribute it independently from the rest of the web site. Should have heading.
 *
 * Forum posts,
 * Blog posts,
 * User comments,
 * Product cards,
 * Newspaper articles
 */
export default function Article({ children, className }: Props) {
  return <article className={className}>{children}</article>;
}
