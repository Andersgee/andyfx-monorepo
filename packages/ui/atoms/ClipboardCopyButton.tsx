import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  children: React.ReactNode;
  data?: string;
  /** called after `data` has been written to clipboard */
  onCopied?: () => void;
};

const copyToClipboard = (data?: string) => {
  if (data) {
    return window?.navigator.clipboard.writeText(data);
  }
};

export default function ClipboardCopyButton({ data, onCopied, children, className }: Props) {
  return (
    <Container
      className={className}
      onClick={() =>
        copyToClipboard(data)?.then(() => {
          onCopied && onCopied();
        })
      }
    >
      {children}
    </Container>
  );
}

const Container = styled.button``;
