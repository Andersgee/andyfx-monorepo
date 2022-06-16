import React, { useState } from "react";
import styled from "styled-components";
import { Accordion } from "@andyfx/ui/molecules";
import api from "lib/api";
import CreateTargetForm from "./CreateTargetForm";
import LoginDialog from "components/LoginDialog";
import { useUserContext } from "contexts/User";

type Props = {
  className?: string;
};

export default function Publish({ className }: Props) {
  const [show, setShow] = useState(false);
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
    <>
      {!user && show && <LoginDialog />}
      <Container className={className}>
        {/*<button onClick={onDelete}>delete all targets</button>*/}
        <Accordion summary="Publiish" onChange={(show) => setShow(show)} initialShow={false}>
          <div>
            <CreateTargetForm disabled={!user} />
          </div>
        </Accordion>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: max-content;
`;
