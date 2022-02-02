import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  label: string | undefined;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export function Checkbox({ label, checked, onChange, className }: Props) {
  return (
    <Container className={className}>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    </Container>
  );
}

const Container = styled.input``;
