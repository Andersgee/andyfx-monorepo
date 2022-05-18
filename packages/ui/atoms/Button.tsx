import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  /** for accessibility: only nedded if children has no text content; aka link is just an image/svg. */
  label?: string;
};

export default function Button({ type = "button", disabled = false, onClick, children, className, label }: Props) {
  return (
    <Container className={className} type={type} onClick={onClick} disabled={disabled} aria-label={label}>
      {children}
    </Container>
  );
}

const Container = styled.button`
  white-space: nowrap;
  //cursor: pointer;
  padding: 0.5em 0.75em;
  outline: none;
  border: 0;
  border-radius: 0.3125rem;
  color: ${(props) => props.theme.color.text.primary};
  background-color: ${(props) => props.theme.color.accent};

  &:hover {
    //background-color: ${(props) => props.theme.color.action.hover};
    opacity: 0.8;
  }

  &:disabled,
  &[disabled] {
    color: ${(props) => props.theme.color.text.secondary};
    background-color: ${(props) => props.theme.color.text.disabled};
  }

  &:focus-visible {
    outline: 1px solid ${(props) => props.theme.color.accent};
    outline-offset: 1px;
  }
`;
