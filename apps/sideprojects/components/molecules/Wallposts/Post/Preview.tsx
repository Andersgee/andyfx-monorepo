import React from "react";
import styled from "styled-components";
import { Accordion } from "@andyfx/ui/molecules";
import Body from "./Body";

type Props = {
  text: string;
  initialShow: boolean;
  className?: string;
};

export default function Preview({ text, initialShow, className }: Props) {
  return (
    <Container summary="preview" className={className} initialShow={initialShow}>
      <Body text={text} />
    </Container>
  );
}

const Container = styled(Accordion)`
  margin-top: 0rem;
`;
