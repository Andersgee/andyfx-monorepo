import React, { useId } from "react";
import styled from "styled-components";

type Precision = "m" | "s";

type Props = {
  date: Date;
  onChange: (date: Date) => void;
  label: string;
  /** "m" or "s" for minute or second picker. default "m" */
  precision?: Precision;
  className?: string;
};

export default function InputDatetimeLocal({ precision = "m", className, date, onChange, label = "Date" }: Props) {
  const id = useId();
  return (
    <Container className={className}>
      <Input
        id={id}
        type="datetime-local"
        value={datetimelocalString(date, precision)}
        onChange={(e) => {
          if (e.target.value) {
            onChange(new Date(e.target.value));
          }
        }}
      />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  background-color: ${(props) => props.theme.color.background};
  padding: 0;
  position: absolute;
  top: 0;
  left: 0.75em;
`;

const Input = styled.input`
  cursor: pointer;
  border: none;
  padding: 0.75em;
  margin: 0.75em 0em 0.5em 0em;
  border-radius: 3px;
  box-shadow: none;
  font-size: ${(props) => props.theme.font.size.medium};
  background-color: ${(props) => props.theme.color.paper};
  outline: 1px solid ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.text.primary};
  font-size: ${(props) => props.theme.font.size.medium};

  &:hover {
    background-color: ${(props) => props.theme.color.action.hover};
    outline: 1px solid ${(props) => props.theme.color.accent};
  }

  &:focus {
    background-color: ${(props) => props.theme.color.action.hover};
  }
`;

/**
 * `<input type="datetime-local">` wants a particular string format in local time such as
 *
 * "2021-12-15T20:15"
 *
 * or
 *
 * "2021-12-15T20:15:34"
 *
 * which is almost just date.toISOString() but not quite.
 */
function datetimelocalString(date: Date, p: Precision) {
  let n = 16;
  if (p === "s") {
    n = 19;
  }
  return localIsoString(date).slice(0, n);
}

function localIsoString(d: Date) {
  const date = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return date.toISOString();
}
