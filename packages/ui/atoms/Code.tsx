import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Prism from "prismjs";
import ClipboardCopyButton from "./ClipboardCopyButton";
/*
import components from "prismjs/components";
const languages: string[] = [];
for (const lang in components.languages) {
  if (lang === "meta") {
    continue;
  }
  languages.push(lang);
  const alias = components.languages[lang].alias;
  if (alias) {
    if (typeof alias === "string") {
      languages.push(alias);
    } else if (Array.isArray(alias)) {
      for (const a of alias) {
        if (typeof a === "string") {
          languages.push(a);
        }
      }
    }
  }
}
export { languages };
*/
//export const languages = Object.keys(components.languages).filter((l) => l !== "meta");

export const languages = [
  "javascript",
  "js", //alias
  "typescript",
  "ts", //alias
  "css",
  "jsx",
  "tsx",
  "bash",
  "shell", //alias
  "markdown",
  "md", //alias
  "python",
  "py", //alias
  "markup",
  "html", //alias
  "xml", //alias
  "svg", //alias
  "glsl",
  "wasm",
  "julia",
];
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-glsl";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-python";
import "prismjs/components/prism-wasm";
import "prismjs/components/prism-julia";

/*
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-csv";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-git";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-mongodb";
import "prismjs/components/prism-python";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-sql";

import "prismjs/components/prism-yaml";
*/

type Props = {
  code: string;
  language: string;
  className?: string;
};

export default function Code({ className, code, language }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [ref, code, language]);

  return (
    <Pre className={className}>
      <StyledCode ref={ref} className={`language-${language}`}>
        {code}
      </StyledCode>
      <CopyButton data={code}>copy</CopyButton>
    </Pre>
  );
}

const CopyButton = styled(ClipboardCopyButton)`
  display: none;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem;
  color: ${(props) => props.theme.color.text.secondary};
  background-color: ${(props) => props.theme.color.background};
  &:hover {
    color: ${(props) => props.theme.color.text.primary};
  }
`;

const Pre = styled.pre`
  &:hover {
    > ${CopyButton} {
      display: block;
    }
  }
  box-shadow: ${(props) => props.theme.shadow[1]};
  position: relative;
  overflow: auto;
  ${(props) => (props.theme.name === "dark" ? codeDark() : codeLight())}
`;

const StyledCode = styled.code`
  padding: 1rem;
  background-color: ${(props) => props.theme.color.paper};
  //font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-family: ${(props) => props.theme.font.family.code};
  font-size: 1rem;
  text-align: left;
  //white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  white-space: pre-wrap;
  //word-wrap: break-word;

  -moz-tab-size: 2;
  -o-tab-size: 2;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
`;

const codeDark = () => `
.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999;
}

.token.punctuation {
  color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: #e2777a;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
  color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
  color: #67cdcc;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`;

const codeLight = () => `
.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #7d8b99;
}

.token.punctuation {
  color: #5f6364;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.function-name,
.token.constant,
.token.symbol,
.token.deleted {
  color: #c92c2c;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.function,
.token.builtin,
.token.inserted {
  color: #2f9c0a;
}

.token.operator,
.token.entity,
.token.url,
.token.variable {
  color: #a67f59;
  background: rgba(255, 255, 255, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword,
.token.class-name {
  color: #1990b8;
}

.token.regex,
.token.important {
  color: #e90;
}

.language-css .token.string,
.style .token.string {
  color: #a67f59;
  background: rgba(255, 255, 255, 0.5);
}

.token.important {
  font-weight: normal;
}

.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.namespace {
  opacity: 0.7;
}
`;
