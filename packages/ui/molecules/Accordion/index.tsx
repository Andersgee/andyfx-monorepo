import React, { useState } from "react";
import styled from "styled-components";
import { ChevronIcon } from "ui/icons";

type Props = {
  summary: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  initialShow?: boolean;
};

/**
 * A Summary that is expandable to show chilren.
 *
 * Children should most likely be one (or several) paragraphs.
 */
export default function Accordion({ summary, children, initialShow = false, className }: Props) {
  const [show, setShow] = useState(initialShow);
  const toggleShow = () => setShow((prev) => !prev);

  return (
    <Container className={className}>
      <Button onClick={toggleShow}>
        <StyledChevronIcon dir={show ? "down" : "right"} />
        {summary}
      </Button>
      <Content show={show}>{children}</Content>
    </Container>
  );
}

const StyledChevronIcon = styled(ChevronIcon)`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
  text-transform: none;
  color: ${(props) => props.theme.color.text.primary};
  font-weight: ${(props) => props.theme.font.weight.medium};
`;

interface ContentProps {
  readonly show: boolean;
}

const Content = styled.div<ContentProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  margin-left: 2rem;
`;

/*
//TODO: properly transition height
//notes: css cant transition height, but can transition max-height. this is essentially a hack  
const Content = styled.div<ContentProps>`
  transition: max-height 0.2s ease-in-out;
  max-height: ${(props) => (props.show ? "500px" : 0)};
  background-color: ${(props) => props.theme.color.paper};
`;
*/

const Container = styled.div``;
