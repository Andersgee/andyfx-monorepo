import React from "react";
import styled from "styled-components";
import { Button, Link } from "@andyfx/ui/atoms";
import { useUserContext } from "contexts/User";

type Props = {
  className?: string;
};

export default function Home({ className }: Props) {
  const { user } = useUserContext();
  return (
    <Container className={className}>
      <Title>{`Welcome, ${user?.name}`}</Title>
      <p>
        Manage your info, privacy, and security to make Andyfx work better for you. We dont track you or collect any
        data on you except that which is required for using our services.
      </p>
      <p>
        See <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Service</Link> for specifics.
      </p>
    </Container>
  );
}

const Container = styled.div``;

const DeleteButton = styled(Button)`
  //background-color: ${(props) => props.theme.color.text};
`;

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color.text.primary};
  font-size: ${(props) => props.theme.font.size.large};
  font-weight: ${(props) => props.theme.font.weight.medium};
`;
