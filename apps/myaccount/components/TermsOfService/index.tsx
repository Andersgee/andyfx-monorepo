import React from "react";
import styled from "styled-components";
import { H1 } from "components/Headings";

type Props = {
  className?: string;
};

export default function TermsOfService({ className }: Props) {
  return (
    <Container className={className}>
      <H1>{`Terms of Service`}</H1>
      <p>terms of service here</p>
    </Container>
  );
}

const Container = styled.div``;
