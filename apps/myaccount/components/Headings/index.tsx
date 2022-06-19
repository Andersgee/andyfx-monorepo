import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function H1({ children, className }: Props) {
  return <Heading1 className={className}>{children}</Heading1>;
}

export function H2({ children, className }: Props) {
  return <Heading2 className={className}>{children}</Heading2>;
}

export function H3({ children, className }: Props) {
  return <Heading3 className={className}>{children}</Heading3>;
}

const Heading1 = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color.text.primary};
  font-size: ${(props) => props.theme.font.size.large};
  font-weight: ${(props) => props.theme.font.weight.medium};
`;

const Heading2 = styled.h2`
  //text-align: center;
  padding-top: 1rem;
  color: ${(props) => props.theme.color.text.primary};
  font-size: ${(props) => props.theme.font.size.large};
  font-weight: ${(props) => props.theme.font.weight.medium};
`;

const Heading3 = styled.h3`
  //text-align: center;
  color: ${(props) => props.theme.color.text.primary};
  font-size: ${(props) => props.theme.font.size.medium};
  font-weight: ${(props) => props.theme.font.weight.medium};
`;
