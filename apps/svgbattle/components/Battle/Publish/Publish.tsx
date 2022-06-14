import React from "react";
import styled from "styled-components";
import { Accordion } from "@andyfx/ui/molecules";
import api from "lib/api";
import CreateTargetForm from "./CreateTargetForm";
import LoginDialog from "components/LoginForm/Dialog";
//import LoginForm from "components/LoginForm";
import { useUserContext } from "contexts/User";

type Props = {
  className?: string;
};

export default function Publish({ className }: Props) {
  const { user } = useUserContext();
  const onDelete = async () => {
    try {
      const json = await api.remove("/target");
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className={className}>
      {/*<button onClick={onDelete}>delete all targets</button>*/}
      <Accordion summary="Publiish">
        <div>
          <CreateTargetForm disabled={!user} />
          {!user && <LoginDialog />}
        </div>
      </Accordion>
    </Container>
  );
}

const Container = styled.div`
  max-width: max-content;
`;
