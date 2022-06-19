import React, { useRef, useState } from "react";
import styled from "styled-components";
import { PersonIcon } from "@andyfx/ui/icons";
import { useUserContext } from "contexts/User";
import LoginDialog from "./LoginDialog";
import AccountDialog from "./AccountDialog";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  className?: string;
};

export default function AccountButton({ className }: Props) {
  const { user } = useUserContext();
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen((prev) => !prev);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      {open && (user ? <AccountDialog /> : <LoginDialog />)}
      <Container className={className} aria-label={user ? user.name : "Account"} onClick={onClick}>
        <PersonIcon />
      </Container>
    </div>
  );
}

const Container = styled.button``;
