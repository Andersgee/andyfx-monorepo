interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Think of section like a chapter of a book.
 *
 * Must have a `title` attribute in order to get the semantic role 'region'.
 * which is something that is "sufficiently important
 * to be listed in the summary of the page". If no title is appropriate then dont use a section.
 *
 * Typically starts with a heading, most likely `<h2>`
 *
 * example:
 * Chapters,
 * Introduction,
 * News items,
 * Contact information
 */
export default function Section({ title, children, className }: Props) {
  return (
    <section className={className} title={title}>
      {children}
    </section>
  );
}
