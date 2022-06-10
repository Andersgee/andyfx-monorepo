import { cssreset } from "./cssreset";
import { createGlobalStyle } from "styled-components";

/**
 * Default colors and typography for app.
 * Note: h1,h2 etc are not supposed to represent style. they represent structure of document.
 * so style all h-tags the same as each other by default (but different than rest).
 */
export const GlobalStyle = createGlobalStyle`
 ${cssreset}

 body {
   height: 100%;
   background-color: ${(props) => props.theme.color.background};
   color: ${(props) => props.theme.color.text.primary};
   font-family: ${(props) => props.theme.font.family.body};
   font-weight: ${(props) => props.theme.font.weight.regular};
   letter-spacing: 0.009375em;
   font-size: 1rem;
   line-height: 1.5;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   //scroll-padding-top: 300px; //var(--header-height)
 }

 h1,h2,h3,h4,h5,h6 {
   font-family: ${(props) => props.theme.font.family.heading};
   font-weight: ${(props) => props.theme.font.weight.medium};
   font-size: ${(props) => props.theme.font.size.large};
   //white-space: nowrap;
   padding: 0 0 0.375em 0;
 }

 h1,h2 {
   font-size: ${(props) => props.theme.font.size.xlarge};
   letter-spacing: 0em;
   line-height: 1;
 }

code {
  font-family: ${(props) => props.theme.font.family.code};
  display: block;
  background: none;
  white-space: pre;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  max-width: 100%;
  min-width: 100px;
  padding: 0;
}

 button {
   background-color: inherit;
   text-transform: uppercase;
   letter-spacing: 0.09375em;
   font-weight: ${(props) => props.theme.font.weight.medium};
   font-size: ${(props) => props.theme.font.size.medium};
   outline: none;
   border: 0;
   cursor: pointer;
 }
 
 /*
 https://en.wikipedia.org/wiki/Line_length
 https://en.wikipedia.org/wiki/Grid_(graphic_design)
 paragraphs should be between 45-75 chars long. ideal somewhere between.
 different sources say different things but... 55, 60 or 66?
 */
 p {
   max-width: 55ch;
   letter-spacing: 0.009375em;
   word-spacing: 0.009375em;
   padding: 0 0 0.875em 0;
   text-indent: 0;
   word-wrap: normal;
   font-kerning: normal;
   line-height: 1.5;
   font-weight: ${(props) => props.theme.font.weight.regular};
   font-size: ${(props) => props.theme.font.size.medium};
   color: ${(props) => props.theme.color.text.secondary};

   a {
     outline-offset: 0px; //dont -1 offset if inside paragraph
   }
 }

 pre, textarea {
   font-family: ${(props) => props.theme.font.family.body};
   //same as p but without max-width and padding-bottom
   //max-width: 55ch;
   letter-spacing: 0.009375em;
   word-spacing: 0.009375em;
   //padding: 0 0 0.875em 0;
   text-indent: 0;
   white-space: pre-wrap;
   word-wrap: break-word;
   font-kerning: normal;
   line-height: 1.5;
   font-weight: ${(props) => props.theme.font.weight.regular};
   font-size: ${(props) => props.theme.font.size.medium};
   color: ${(props) => props.theme.color.text.primary};

   a {
     outline-offset: 0px; //dont -1 offset if inside paragraph
   }
 }
 
 
 a {
    color: ${(props) => props.theme.color.text.primary};
    text-decoration: underline dotted;
     //text-decoration: none;
     &:link {
       //unvisited
       color: ${(props) => props.theme.color.text.primary};
     }
     &:visited {
      color: ${(props) => props.theme.color.text.primary};
     }
     &:hover {
       color: ${(props) => props.theme.color.text.primary};
       text-decoration: underline;
      }
     &:active {
      color: ${(props) => props.theme.color.text.primary};
     }
   }


  button, a {
    outline:none; 
    outline-offset: -1px;

    &:focus-visible {
      outline: 1px solid ${(props) => props.theme.color.accent};      
    }
/*
    svg:hover circle,
    svg:hover line,
    svg:hover path,
    svg:hover polygon,
    //svg:hover text
    svg:hover ellipse,
    svg:hover rect {
      fill: ${(props) => props.theme.color.icon.hover};
      stroke: ${(props) => props.theme.color.icon.hover};
      fill: red;
    }
  */  
  }

  button:hover, a:hover {
    svg[data-icon] {
      *:not([fill="none"]) {
        fill: ${(props) => props.theme.color.icon.hover};
      }
      *:not([stroke="none"]) {
        stroke: ${(props) => props.theme.color.icon.hover};
      }
    }
  }

 ::selection {
   background-color: ${(props) => props.theme.color.accent};
 }

 //essentially <input> elements
 //:focus-visible {}

 //the others such as buttons
 //:focus:not(:focus-visible) {}


 /*
 @media print {
   div {
     break-inside: avoid;
   }
 }
 */
`;
