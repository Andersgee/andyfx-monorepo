import NextLink from "next/link";
//import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

/**
 * Internal links: returns a next/link which has some magic preloading etc.
 *
 * External links: returns a normal `<a href>`
 *
 * read more: [https://nextjs.org/docs/api-reference/next/link](https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag)
 */
export function Link({ href, children, className }: Props) {
  const isExternal = href.startsWith("http");
  return isExternal ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
