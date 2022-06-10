import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return <Container className={className}>Header</Container>;
}

const Container = styled.div``;
