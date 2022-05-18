import React from "react";
import styled from "styled-components";

type Props = {
  isSignup: boolean;
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

export default function Switch({ isSignup, setIsSignup, className }: Props) {
  return (
    <Container className={className}>
      <Button active={!isSignup} type="button" onClick={() => setIsSignup(false)}>
        Sign in
      </Button>
      <Button active={isSignup} type="button" onClick={() => setIsSignup(true)}>
        Sign up
      </Button>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.color.paper};
  box-shadow: ${(props) => props.theme.shadow[3]};
  display: flex;
  //padding: 1rem;
  //justify-content: space-around;
`;

interface ButtonProps {
  active: boolean;
}

const Button = styled.button<ButtonProps>`
  flex: 1 0 0;
  padding: 0.75rem 0 0.75rem 0;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.text.primary};
  background-color: ${(props) => (props.active ? props.theme.color.paper : props.theme.color.action.hover)};

  &:hover {
    outline: 1px solid ${(props) => props.theme.color.accent};
    //background-color: ${(props) => props.theme.color.accent};
  }
`;
