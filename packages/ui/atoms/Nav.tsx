interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * The `<nav>`element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.
 *
 * Common examples of navigation sections are menus, tables of contents, and indexes.
 */
export default function Nav({ children, className }: Props) {
  return <nav className={className}>{children}</nav>;
}
