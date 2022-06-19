import React from "react";
import styled from "styled-components";
import Sidebar from "components/Sidebar";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Account({ children, className }: Props) {
  return (
    <Container className={className}>
      <StyledSidebar />
      <Content>
        <div>{children}</div>
      </Content>
    </Container>
  );
}

const StyledSidebar = styled(Sidebar)`
  grid-area: sidebar;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template:
    "sidebar" 3rem
    "content" auto
    / auto;

  @media ${(props) => props.theme.media.lg} {
    grid-template:
      "sidebar content" auto
      / max-content auto;
  }
`;
