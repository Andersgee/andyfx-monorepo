import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function Button({ type = "button", disabled = false, onClick, children, className }: Props) {
  return (
    <Container className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Container>
  );
}

const Container = styled.button`
  white-space: nowrap;
  cursor: pointer;
  padding: 0.5em 0.75em;
  outline: none;
  border: 0;
  border-radius: 0.3125rem;
  color: ${(props) => props.theme.color.text.primary};
  background-color: ${(props) => props.theme.color.accent};

  &:hover {
    opacity: 0.8;
  }
`;
