import React from "react";
import styled from "styled-components";
import { Link as DefaultLink } from "@andyfx/ui/atoms";
import { useRouter } from "next/router";
//import { AddIcon } from "@andyfx/ui/icons";

type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  const { route } = useRouter();

  return (
    <Container className={className}>
      <Nav>
        <Ul>
          <Li>
            <Link href="/" active={route === "/"}>
              Home
            </Link>
          </Li>
          <Li>
            <Link href="/personal-info" active={route === "/personal-info"}>
              Personal info
            </Link>
          </Li>
          <Li>
            <Link href="/privacy" active={route === "/privacy"}>
              Privacy
            </Link>
          </Li>
          <Li>
            <Link href="/terms" active={route === "/terms"}>
              Terms
            </Link>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
}

interface LinkProps {
  readonly active?: boolean;
}

const Link = styled(DefaultLink)<LinkProps>`
  display: flex;
  align-items: center;
  //padding: 0.5rem 1rem;
  padding: 0.5rem 2rem;
  text-decoration: none;
  height: 48px;

  &:hover {
    background-color: ${(props) => props.theme.color.action.hover};
  }

  &:link {
    text-decoration: none;
  }

  &:focus-visible {
    background-color: ${(props) => props.theme.color.action.focus};
  }

  background-color: ${(props) => (props.active ? props.theme.color.action.hover : props.theme.color.background)};
`;

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Nav = styled.nav`
  width: 100%;

  @media ${(props) => props.theme.media.md_and_below} {
    display: flex;
    justify-content: center;
  }
`;

const Ul = styled.ul`
  display: flex;

  @media ${(props) => props.theme.media.md_and_below} {
    flex-direction: row;

    align-items: center;
  }

  @media ${(props) => props.theme.media.lg} {
    flex-direction: column;
  }
`;

const Li = styled.li`
  list-style: none;
`;
