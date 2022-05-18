import NextLink from "next/link";
//import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
  /** for accessibility: only nedded if children has no text content; aka link is just an image/svg. */
  label?: string;
}

/**
 * Internal links: returns a next/link which has some magic preloading etc.
 *
 * External links: returns a normal `<a href>`
 *
 * read more: [https://nextjs.org/docs/api-reference/next/link](https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag)
 */
export default function Link({ href, children, className, label }: Props) {
  const isExternal = href.startsWith("http");
  return isExternal ? (
    <a href={href} className={className} aria-label={label}>
      {children}
    </a>
  ) : (
    <NextLink href={href}>
      <a className={className} aria-label={label}>
        {children}
      </a>
    </NextLink>
  );
}
