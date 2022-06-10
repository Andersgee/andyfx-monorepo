import React, { useId, useRef, useState } from "react";
import styled from "styled-components";
import { ClearIcon } from "ui/icons";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  value: string;
  onChange: (str: string) => void;
  /** suggestions (for the current `value` string). */
  suggestions: string[];
  onSelect: (str: string) => void;
  className?: string;
  label?: string;
};

export default function AutoComplete({ value, onChange, suggestions, onSelect, label = "Search", className }: Props) {
  const containerRef = useRef(null);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useOnClickOutside(containerRef, () => {
    setShowSuggestions(false);
  });

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveSuggestionIndex(-1);
    setShowSuggestions(true);
    onChange(e.target.value);
  };

  const onClick = (i: number) => {
    setActiveSuggestionIndex(-1);
    setShowSuggestions(false);
    onChange(suggestions[i]);
    onSelect(suggestions[i]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
    if (e.code === "Enter") {
      if (activeSuggestionIndex < 0 && suggestions[0]) {
        onClick(0); //default to first suggestion if simply Enter
      } else {
        onClick(activeSuggestionIndex);
      }
    } else if (e.code === "ArrowUp") {
      if (activeSuggestionIndex < 0) return;
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.code === "ArrowDown") {
      if (activeSuggestionIndex + 1 === suggestions.length) return;
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    } else if (e.code === "Escape") {
      setShowSuggestions(false);
      setActiveSuggestionIndex(-1);
    }
  };

  const SuggestionsListComponent = () => {
    return suggestions.length ? (
      <Ul>
        {suggestions.map((suggestion, i) => (
          <Li active={activeSuggestionIndex === i} key={i} onClick={() => onClick(i)}>
            {suggestion}
          </Li>
        ))}
      </Ul>
    ) : null;
  };

  const id = useId();

  return (
    <Container ref={containerRef} className={className}>
      <Input
        id={id}
        name="search"
        type="text"
        autoComplete="off"
        onChange={onInput}
        onKeyDown={onKeyDown}
        onClick={() => setShowSuggestions(true)}
        value={value}
        placeholder=""
      />
      <Label htmlFor={id}>{label}</Label>
      <FocusBg></FocusBg>
      <ClearButton visible={!!value} onClick={() => onChange("")}>
        <StyledClearcon />
      </ClearButton>
      {showSuggestions && value && <SuggestionsListComponent />}
    </Container>
  );
}

const StyledClearcon = styled(ClearIcon)`
  width: 36px;
  height: 36px;
`;

interface ClearButtonProps {
  readonly visible: boolean;
}

const ClearButton = styled.button<ClearButtonProps>`
  position: absolute;
  top: 16px;
  right: 4px;
  display: ${(props) => (props.visible ? "inline" : "none")};
`;

const Label = styled.label`
  position: absolute;
  top: 20px;
  left: 12px;
  color: ${(props) => props.theme.color.text.secondary};
  font-size: ${(props) => props.theme.font.size.medium};
  font-weight: ${(props) => props.theme.font.weight.medium};
  transform-origin: top left;
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

  &:not(:placeholder-shown) ~ ${Label} {
    //after something has been typed and left the field
    color: ${(props) => props.theme.color.text.secondary};
    transform: translateY(-12px) scale(0.75);
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
    outline: none;
    box-shadow: inset 0 -2px 0 ${(props) => props.theme.color.action.focus};
  }

  &:focus ~ ${Label} {
    color: ${(props) => props.theme.color.accent};
    transform: translateY(-12px) scale(0.75);
  }

  &:focus ~ ${Label} ~ ${FocusBg} {
    transform: scaleX(1);
    transition: transform 0.1s ease;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 25ch;
  border-radius: 3px;
  overflow: visible;
  box-shadow: ${(props) => props.theme.shadow[1]};
`;

interface LiProps {
  readonly active: boolean;
}

const Ul = styled.ul`
  box-shadow: ${(props) => props.theme.shadow[1]};
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 55px;
  background-color: ${(props) => props.theme.color.paper};
`;

const Li = styled.li<LiProps>`
  width: 100%;
  background-color: ${(props) => props.active && props.theme.color.action.selected};
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: ${(props) => props.theme.font.weight.medium};
  list-style: none;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.action.selected};
  }
`;
