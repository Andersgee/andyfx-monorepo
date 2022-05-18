interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * Represents a container for introductory content or a set of navigational links.
 *
 * one or more heading elements (<h1> - <h6>)
 * logo or icon
 * authorship information
 */
export default function Header({ children, className }: Props) {
  return <header className={className}>{children}</header>;
}
