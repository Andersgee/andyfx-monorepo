import styled from "styled-components";
import { Divider } from "ui/atoms";
import { useUser } from "hooks/useUser";

type Props = {
  id: string;
  className?: string;
};

export default function Profile({ id, className }: Props) {
  const { user } = useUser(id);

  if (!user) {
    return <div>loading...</div>;
  }

  return (
    <Container className={className}>
      <div>Profile/stats for {user.name} goes here</div>
      <Divider />
      <div>email</div>
      <div>{user.email}</div>
    </Container>
  );
}

const Container = styled.div``;
