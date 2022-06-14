import React from "react";
import styled from "styled-components";
import LoginForm from "components/LoginForm";

type Props = {
  open?: boolean;
  className?: string;
};

/**
 * Same as `LoginForm` but absolutely positioned in top right corner.
 */
export default function LoginDialog({ open = true, className }: Props) {
  return (
    <Container open={open} className={className}>
      <LoginForm />
    </Container>
  );
}

interface ContainerProps {
  readonly open: boolean;
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  display: ${(props) => (props.open ? "block" : "none")};
  top: 3rem;
  right: 0;
  z-index: 1;
`;
