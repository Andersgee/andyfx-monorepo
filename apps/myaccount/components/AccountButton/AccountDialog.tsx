import { useUserContext } from "contexts/User";
import React from "react";
import styled from "styled-components";
import { Button, Divider, Link } from "@andyfx/ui/atoms";

type Props = {
  open?: boolean;
  className?: string;
};

/**
 * Same as `LoginForm` but absolutely positioned in top right corner.
 */
export default function AccountDialog({ className }: Props) {
  const { user, logout } = useUserContext();
  if (!user) {
    return null;
  }
  return (
    <Container className={className}>
      <AccountContent>
        <p>signed in as {user.name}</p>
        <ManageContainer>
          <ManageLink href="https://myaccount.andyfx.net">manage your account</ManageLink>
        </ManageContainer>
        <Divider />
        <SubmitSection>
          <SubmitButton onClick={logout}>sign out</SubmitButton>
        </SubmitSection>
      </AccountContent>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  z-index: 1;
`;

const AccountContent = styled.div`
  background-color: ${(props) => props.theme.color.paper};
  box-shadow: ${(props) => props.theme.shadow[3]};

  padding: 2rem 2rem 2rem 2rem;
`;

const SubmitButton = styled(Button)`
  display: block;
  width: 250px;
`;

const SubmitSection = styled.div`
  margin: 1rem 0 0.5rem 0;
  display: flex;
  justify-content: center;
`;

const ManageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ManageLink = styled(Link)`
  font-size: ${(props) => props.theme.font.size.xsmall};
  font-weight: ${(props) => props.theme.font.weight.regular};
  text-transform: none;
  color: ${(props) => props.theme.color.text.primary};

  text-decoration: none;
  :hover {
    text-decoration: underline 1px dotted;
  }
`;
