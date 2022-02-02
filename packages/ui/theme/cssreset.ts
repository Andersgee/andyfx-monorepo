import { css } from "styled-components";

/* 
mostly copy pasted from https://piccalil.li/blog/a-modern-css-reset/
*/
export const cssreset = css`
  /* Box sizing rules */
  html {
    height: 100%;
    box-sizing: border-box;
  }

  *,
  :after,
  :before {
    box-sizing: inherit;
    margin: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  ul,
  ol {
    padding: 0;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  ::-moz-focus-inner {
    border: 0;
  }

  svg {
    shape-rendering: crispEdges;
    display: block;
  }
  svg circle,
  svg line,
  svg path,
  svg polygon,
  svg ellipse,
  svg rect {
    shape-rendering: geometricprecision;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
