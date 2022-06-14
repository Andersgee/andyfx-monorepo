import { useRef, useState } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "usehooks-ts";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function DropdownMenu({ className, children }: Props) {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);
  const handleClickOutside = () => setOpen(false);
  useOnClickOutside(ref, handleClickOutside);

  return (
    <Container className={className} ref={ref}>
      <Button onClick={() => setOpen(!open)}>Dropdown Menu</Button>
      <Items open={open}>{children}</Items>
    </Container>
  );
}

const Button = styled.button``;

const Container = styled.div`
  position: relative;
`;

interface ItemsProps {
  open: boolean;
}

const Items = styled.div<ItemsProps>`
  position: absolute;
  z-index: 1;
  display: ${(props) => (props.open ? "block" : "none")};
  min-width: 160px;
  background-color: #3e8e41;
`;
