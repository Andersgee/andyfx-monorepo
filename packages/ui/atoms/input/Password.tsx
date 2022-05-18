import React, { useState } from "react";
import styled from "styled-components";
import VisibilityIcon from "ui/icons/Visibility";

type Props = {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  errorText?: string | boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Password({ name, label, value, errorText = "", placeholder = "", className, ...rest }: Props) {
  const [showPassword, setShowpassword] = useState(false);

  return (
    <Container className={className}>
      <Input name={name} type={showPassword ? "text" : "password"} value={value} placeholder={placeholder} {...rest} />
      <LabelText>{label}</LabelText>
      <FocusBg></FocusBg>
      {errorText && <ErrorText>{errorText}</ErrorText>}
      {value && (
        <ShowpasswordButton
          tabIndex={-1}
          type="button"
          onClick={() => setShowpassword((prev) => !prev)}
          aria-label="Toggle show password"
        >
          <StyledVisibilityIcon on={showPassword}></StyledVisibilityIcon>
        </ShowpasswordButton>
      )}
    </Container>
  );
}

const StyledVisibilityIcon = styled(VisibilityIcon)`
  width: 36px;
  height: 36px;
`;

const ShowpasswordButton = styled.button`
  position: absolute;
  bottom: 2px;
  right: 4px;
`;

const Container = styled.label`
  display: block;
  position: relative;
  max-width: 25ch;
  border-radius: 3px;
  overflow: hidden;
`;

const LabelText = styled.span`
  position: absolute;
  top: 20px;
  left: 12px;
  color: ${(props) => props.theme.color.text.secondary};
  font-size: ${(props) => props.theme.font.size.medium};
  font-weight: ${(props) => props.theme.font.weight.medium};
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.2s ease;
  pointer-events: none;
`;

const ErrorText = styled.span`
  position: absolute;
  top: 4px;
  right: 8px;
  color: ${(props) => props.theme.color.error};
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: ${(props) => props.theme.font.weight.medium};
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.2s ease;
  pointer-events: none;
`;

const FocusBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.action.selected};
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
`;

const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border: 0;
  font-family: ${(props) => props.theme.font.family.body};
  font-size: ${(props) => props.theme.font.size.medium};
  font-weight: ${(props) => props.theme.font.weight.regular};
  padding: 1rem 0.75rem 0 0.75rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme.color.paper};
  color: ${(props) => props.theme.color.text.primary};
  box-shadow: inset 0 -1px 0 ${(props) => props.theme.color.primary};
  transition: transform 0.15s ease;

  &:hover {
    background-color: ${(props) => props.theme.color.action.hover};
    box-shadow: inset 0 -1px 0 ${(props) => props.theme.color.accent};
  }

  &:not(:placeholder-shown) + ${LabelText} {
    //after something has been typed and left the field
    color: ${(props) => props.theme.color.text.secondary};
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
    outline: none;
    box-shadow: inset 0 -2px 0 ${(props) => props.theme.color.action.focus};
  }

  &:focus + ${LabelText} {
    color: ${(props) => props.theme.color.accent};
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  &:focus + ${LabelText} + ${FocusBg} {
    transform: scaleX(1);
    transition: transform 0.1s ease;
  }
`;
