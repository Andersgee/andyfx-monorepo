import React, { useEffect, useId, useRef } from "react";
import styled, { css } from "styled-components";
import Prism from "prismjs";
import { DragHandleIcon, FormatSizeIcon } from "ui/icons";
import { useCodeContext } from "contexts/Code";
import Header from "./Header";

import "prismjs/components/prism-markup";
import type { Target } from "targets";

type Props = {
  target: Target;
  language: string;
  className?: string;
};

const MIN_HEIGHT = 150; //pixels
const MIN_WIDTH = 300; //pixels

export default function Editor({ target, language, className }: Props) {
  const { code, setCode, setSize } = useCodeContext();
  const textareaId = useId();
  const codeRef = useRef<HTMLElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setSize([target.width, target.height]);
  }, [target, setSize]);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  //prismjs is not really built as a text editor, so use a textarea
  //but hide text color on it and show the prismjs highlighted code tag instead
  //this function here is just positioning the code tag on textarea scrolling etc
  const updateCodeSize = () => {
    if (textareaRef.current && codeRef.current) {
      codeRef.current.style.height = `${textareaRef.current.clientHeight + textareaRef.current.scrollTop}px`;
      codeRef.current.style.top = `-${textareaRef.current.scrollTop}px`;
      //codeRef.current.style.backgroundColor = "red";
    }
  };

  const handleResizeMove = (e: MouseEvent) => {
    if (textareaRef.current) {
      const h = Math.max(
        MIN_HEIGHT,
        -window.pageYOffset + e.pageY - textareaRef.current.getBoundingClientRect().top - 20
      );
      textareaRef.current.style.height = `${h}px`;
      updateCodeSize();
    }
  };

  //custom resize handler
  const onResizeMouseDown = () => {
    document?.addEventListener("mousemove", handleResizeMove);
    document?.addEventListener(
      "mouseup",
      () => {
        document?.removeEventListener("mousemove", handleResizeMove);
      },
      { once: true }
    );
  };

  return (
    <Container className={className}>
      <Header target={target} />
      <Pre tabIndex={-1} className={`language-${language}`}>
        <Textarea
          id={textareaId}
          value={code}
          ref={textareaRef}
          spellCheck={false}
          onChange={(e) => {
            //updateCodeSize();
            setCode(e.target.value);
          }}
          onScroll={() => updateCodeSize()}
        />
        <StyledCode ref={codeRef} aria-hidden="true" className={`language-${language}`}>
          {code}
        </StyledCode>
      </Pre>

      <ResizeHandle onMouseDown={onResizeMouseDown}>
        <Icon dir="vertical" />
      </ResizeHandle>
      <StyledFormatSizeIcon />
      <Label htmlFor={textareaId}>{language}</Label>
    </Container>
  );
}

const StyledFormatSizeIcon = styled(FormatSizeIcon)`
  width: 32px;
  height: 32px;
`;

const Container = styled.div`
  position: relative;
`;

const Label = styled.label``;

const ResizeHandle = styled.div`
  cursor: ns-resize;
  user-select: none;
  display: flex;
  justify-content: center;

  &:hover {
    svg > path {
      fill: ${(props) => props.theme.color.icon.hover};
    }
  }
`;

const Icon = styled(DragHandleIcon)`
  width: 32px;
  height: 32px;
`;

const Pre = styled.pre`
  box-shadow: ${(props) => props.theme.shadow[1]};
  position: relative;
  //overflow: visible;

  width: 100%;
  ${(props) => (props.theme.name === "dark" ? codeDark() : codeLight())}

  overflow: hidden;
`;

const style = css`
  margin: 0;
  padding: 1rem;
  //background-color: ${(props) => props.theme.color.paper};
  //font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-family: ${(props) => props.theme.font.family.code};
  font-size: 1rem;
  text-align: left;
  //white-space: pre;
  word-spacing: normal;
  word-break: keep-all;
  word-wrap: none;
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

  border: none;

  min-width: ${MIN_WIDTH}px;
  width: 100%;
`;

const Textarea = styled.textarea`
  ${style}
  background-color: transparent;
  background-color: ${(props) => props.theme.color.paper};
  color: transparent;
  caret-color: ${(props) => props.theme.color.text.primary};

  resize: none; //use custom resizing instead

  height: 300px;

  &:focus {
    outline: 1px solid ${(props) => props.theme.color.accent};
    outline-offset: -1px;
  }
`;

const StyledCode = styled.code`
  ${style}

  pointer-events: none;
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
`;

//top: -${(props) => props.scroll}px;
//height: ${(props) => `${props.h + props.scroll + 100}px`};

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
  //background: rgba(255, 255, 255, 0.5);
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
