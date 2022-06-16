import React, { useState } from "react";
import styled from "styled-components";
import { PersonIcon } from "@andyfx/ui/icons";
import { useUserContext } from "contexts/User";
import LoginDialog from "components/LoginDialog";
import AccountDialog from "components/AccountDialog";
type Props = {
  className?: string;
};

export default function AccountButton({ className }: Props) {
  const { user } = useUserContext();
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen(!open);

  return (
    <>
      {open && (user ? <AccountDialog /> : <LoginDialog />)}
      <Container className={className} aria-label={user ? user.name : "Account"} onClick={onClick}>
        <PersonIcon />
      </Container>
    </>
  );
}

const Container = styled.button``;
