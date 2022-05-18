import React from "react";
import styled from "styled-components";

type Placement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end";

type Props = {
  label?: string;
  placement?: Placement;
  className?: string;
  children: React.ReactNode;
};

/**
 * default `placement="bottom"` (centered)
 *
 *
 */
export default function Tooltip({ placement = "bottom", label, className, children }: Props) {
  if (!label) {
    return <>{children}</>;
  }
  return (
    <Container data-tooltip={label} placement={placement} className={className}>
      {children}
    </Container>
  );
}

interface LabelProps {
  readonly placement: Placement;
}

const Container = styled.div<LabelProps>`
  position: relative;

  &::after {
    content: "";
    position: absolute;

    //width: 400px;
    ${({ placement }) => placement === "top" && "bottom: 100%; left: 50%; transform: translateX(-50%) scale(0);"}
    ${({ placement }) => placement === "top-start" && "bottom: 100%; left: 0; transform:scale(0);"}
    ${({ placement }) => placement === "top-end" && "bottom: 100%; right: 0; transform:scale(0);"}

    ${({ placement }) => placement === "bottom" && "top: 100%; left: 50%; transform: translateX(-50%) scale(0);"}
    ${({ placement }) => placement === "bottom-start" && "top: 100%; left: 0; transform:scale(0);"}
    ${({ placement }) => placement === "bottom-end" && "top: 100%; right: 0; transform:scale(0);"}
  }

  &:hover::after {
    ${({ placement }) => placement === "top" && "transform: translateX(-50%) scale(1);"}
    ${({ placement }) => placement === "top-start" && "transform: scale(1);"}
    ${({ placement }) => placement === "top-end" && "transform: scale(1);"}

    ${({ placement }) => placement === "bottom" && "transform: translateX(-50%) scale(1);"}
    ${({ placement }) => placement === "bottom-start" && "transform: scale(1);"}
    ${({ placement }) => placement === "bottom-end" && "transform: scale(1);"}

    //&:after {
    content: attr(data-tooltip);
    width: max-content;
    transition: transform 0.05s ease-out 0.75s;
    color: ${(props) => props.theme.color.text.secondary};
    background-color: ${(props) => props.theme.color.paper};
    font-family: ${(props) => props.theme.font.family.body};
    font-size: ${(props) => props.theme.font.size.small};
    font-weight: ${(props) => props.theme.font.weight.medium};

    border-radius: 0.25rem;
    padding: 0.5rem;
    box-shadow: ${(props) => props.theme.shadow[1]};
  }
`;
