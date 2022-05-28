import React, { useId } from "react";
import styled from "styled-components";
import { CheckboxIcon } from "ui/icons";
type Props = {
  label?: string;
  checked: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({ label, checked, className, ...rest }: Props) {
  const id = useId();
  return (
    <div>
      <Container checked={checked} className={className}>
        <Input id={id} type="checkbox" checked={checked} {...rest} />
        <StyledCheckboxIcon checked={checked} />
        <LabelText>{label}</LabelText>
      </Container>
    </div>
  );
}

interface CheckedProps {
  readonly checked: boolean;
}

const StyledCheckboxIcon = styled(CheckboxIcon)<CheckedProps>`
  width: 24px;
  height: 24px;

  outline: 1px solid ${(props) => props.theme.color.icon.fill};
  background-color: ${(props) => props.theme.color.paper};
  rect {
    //fill: ${(props) => (props.checked ? props.theme.color.icon.hover : "none")};
    fill: none;
  }

  path {
    stroke: ${(props) => (props.checked ? props.theme.color.icon.fill : "none")};
  }
`;

const Container = styled.label<CheckedProps>`
  cursor: pointer;
  display: inline-flex;

  &:hover ${StyledCheckboxIcon} {
    background-color: ${(props) => props.theme.color.action.hover};
    outline: 1px solid ${(props) => props.theme.color.accent};
  }
`;

const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
`;

const LabelText = styled.span`
  padding-left: 0.5em;
`;
