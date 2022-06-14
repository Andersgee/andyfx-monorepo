import styled from "styled-components";
import { Divider } from "@andyfx/ui/atoms";
import { useUser } from "hooks/useUser";
import Wallposts from "molecules/Wallposts";

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
      <div>
        Profile/stats for {user.name} ({user.email}) goes here
      </div>
      <Divider />
      <Wallposts userId={id} />
    </Container>
  );
}

const Container = styled.div``;
