import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  /** size of shadow, 0 - 9*/
  shadow?: number;
  children: React.ReactNode;
};

export default function Paper({ shadow = 1, children, className }: Props) {
  return (
    <Container shadow={shadow} className={className}>
      {children}
    </Container>
  );
}

interface PaperProps {
  readonly shadow: number;
}

const Container = styled.div<PaperProps>`
  box-shadow: ${(props) => props.theme.shadow[props.shadow]};
  background-color: ${(props) => props.theme.color.paper};
`;
