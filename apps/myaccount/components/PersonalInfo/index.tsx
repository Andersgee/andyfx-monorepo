import React from "react";
import styled from "styled-components";
import { H1 } from "components/Headings";
import { useUserContext } from "contexts/User";
import { EditIcon } from "@andyfx/ui/icons";
type Props = {
  className?: string;
};

export default function PersonalInfo({ className }: Props) {
  const { user } = useUserContext();
  if (!user) {
    return <Container className={className}>sign in first</Container>;
  }
  console.log(user);
  return (
    <Container className={className}>
      <H1>Personal info</H1>
      <p>personal info here</p>
      {!user.verified && <div>not verified</div>}
      <Item>
        <pre>email </pre>
        <pre>{user.email}</pre>
      </Item>
      <Item>
        <pre>name </pre>
        <pre>{user.name}</pre>
        <EditIcon />
      </Item>
      <Item>
        <pre>password </pre>
        <pre>***</pre>
        <EditIcon />
      </Item>
    </Container>
  );
}

const Container = styled.div``;

const Item = styled.div`
  display: flex;
`;
