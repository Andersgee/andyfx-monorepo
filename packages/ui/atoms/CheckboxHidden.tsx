import styled from "styled-components";

interface Props {
  checked: boolean;
  onChange?: () => void;
  className?: string;
  id?: string;
  ariaLabel: string;
}

export function CheckboxHidden({ ariaLabel, id, checked, onChange, className }: Props) {
  return (
    <Input aria-label={ariaLabel} id={id} type="checkbox" className={className} checked={checked} onChange={onChange} />
  );
}

const Input = styled.input`
  cursor: pointer;
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus-visible {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.background}, 0 0 0 4px ${(props) => props.theme.color.accent};
  }
`;
