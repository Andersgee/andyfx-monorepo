import { useState } from "react";
import styled from "styled-components";
import { useUserContext } from "contexts/User";
import { Divider, Link, Button, Tooltip } from "ui/atoms";
import LoginForm from "organisms/LoginForm";
import { Text } from "ui/atoms/input";
import api from "lib/api";
import TokenSection from "./token-section";

type Props = {
  className?: string;
};

export default function EditProfile({ className }: Props) {
  const { user, logout, getMyUser } = useUserContext();
  const [name, setName] = useState("");

  if (!user) {
    return <LoginForm />;
  }

  const handleClick = () =>
    api
      .update(`/user`, { name })
      .then(() => {
        getMyUser();
      })
      .catch((err) => console.log(err));

  const handleRemove = () => {
    api
      .remove(`/user`)
      .then(() => {
        logout();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className={className}>
      <div>edit your profile</div>
      <div>name:</div>
      <div>{user.name}</div>
      <Divider />

      <Text name="name" label="name" value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={handleClick}>change name</Button>

      <Button onClick={handleRemove}>REMOVE ME</Button>

      <Divider />
      <div>email</div>
      <div>{user.email}</div>
      <Divider />
      <div>your public profile</div>
      <Link href={`/profile/${user._id}`}>{user.name} page</Link>
      <div>
        <Tooltip label="Click here to do stuff">
          <Button onClick={logout}>sign out</Button>
        </Tooltip>
      </div>
      <TokenSection />
    </Container>
  );
}

const Container = styled.div``;
