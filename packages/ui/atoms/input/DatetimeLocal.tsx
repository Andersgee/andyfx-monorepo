import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  date: Date;
  onChange: (date: Date) => void;
  label: string;
};

export default function InputDatetimeLocal({ className, date, onChange, label = "Date" }: Props) {
  return (
    <Container className={className}>
      <Input
        id={`${label}`}
        type="datetime-local"
        value={datetimelocalString(date)}
        onChange={(e) => {
          if (e.target.value) {
            onChange(new Date(e.target.value));
          }
        }}
      />
      <Label htmlFor={label}>{label}</Label>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  background-color: ${(props) => props.theme.color.background};
  padding: 0 0.25em 0 0.25em;
  position: absolute;
  top: 0;
  left: 1em;
`;

const Input = styled.input`
  border: none;
  padding: 0.75em;
  margin: 0.75em 0.5em 0.5em 0.5em;
  border-radius: 0.25rem;
  box-shadow: none;
  font-size: ${(props) => props.theme.font.size.medium};
  background-color: ${(props) => props.theme.color.background};
  outline: 1px solid ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.text.primary};
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
function datetimelocalString(date: Date) {
  return localIsoString(date).slice(0, 16);
}

function localIsoString(d: Date) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString();
}
