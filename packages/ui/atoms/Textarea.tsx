import React, { useEffect, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { DragHandleIcon } from "ui/icons";

type Props = {
  className?: string;
  cursorPlacement?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ cursorPlacement, className, ...rest }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (cursorPlacement && ref.current) {
      ref.current.setSelectionRange(cursorPlacement, cursorPlacement);
    }
  }, [ref, cursorPlacement]);

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;
    const el = ref.current;
    const h = Math.max(36, e.pageY - el.offsetTop);
    el.style.height = `${h}px`;
  };

  const onMouseDown = () => {
    document?.addEventListener("mousemove", handleMouseMove);
    document?.addEventListener(
      "mouseup",
      () => {
        document?.removeEventListener("mousemove", handleMouseMove);
      },
      { once: true }
    );
  };

  return (
    <Container className={className}>
      <Area ref={ref} {...rest} />
      <ResizeHandle onMouseDown={onMouseDown}>
        <Icon dir="vertical" />
      </ResizeHandle>
    </Container>
  );
}

const Icon = styled(DragHandleIcon)`
  width: 32px;
  height: 32px;
`;

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

const Container = styled.div``;

const Area = styled.textarea`
  display: block;
  width: 100%;

  margin: 0;
  padding: 0.5rem;
  cursor: text;

  overflow: auto;
  //resize: vertical;
  resize: none; //use custom resizing instead

  background-color: ${(props) => props.theme.color.paper};

  outline: none;
  border: none;
  box-shadow: ${(props) => props.theme.shadow[1]};
  color: ${(props) => props.theme.color.text.primary};
  caret-color: ${(props) => props.theme.color.text.primary};

  &:focus {
    outline: 1px solid ${(props) => props.theme.color.accent};
  }
`;
