import React, { useRef, useState } from "react";
import styled from "styled-components";
import LoginForm from "organisms/LoginForm";
import { useUserContext } from "contexts/User";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  className?: string;
};

/**
 * LoginForm in top right corner
 *
 * Return null if user is already logged in or when clicking outside it.
 */
export default function LoginDialog({ className }: Props) {
  const [open, setOpen] = useState(true);

  const ref = useRef(null);
  const handleClickOutside = () => setOpen(false);
  useOnClickOutside(ref, handleClickOutside);

  const { user } = useUserContext();
  if (user || !open) {
    return null;
  }
  return (
    <Container ref={ref} className={className}>
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  z-index: 1;
`;
