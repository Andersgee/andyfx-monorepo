import { useState, useRef, ReactNode } from "react";
import styled from "styled-components";
import DefaultLink from "../atoms/Link";
import { useOnClickOutside } from "usehooks-ts";
import { MenuIcon } from "@andyfx/ui/icons";
import { Tooltip } from "@andyfx/ui/atoms";

interface Props {
  className?: string;
  links?: [label: string, href: string][];
  children?: ReactNode;
}

/**
 * Responsive navbar with themetoggle button.
 *
 * looks best with 3, 4 or 5 links
 */
export default function Navbar({ links, children, className }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  const handleButtonClick = () => setOpen(!open);

  return (
    <Container className={className}>
      <NavMenu ref={ref}>
        {links && (
          <Tooltip placement="bottom-start" label="Navigation menu">
            <MenuButton onClick={handleButtonClick} aria-label="nav-menu">
              <MenuIcon />
            </MenuButton>
          </Tooltip>
        )}

        <Nav>
          <Ul open={open}>
            {links?.map(([label, href], i) => (
              <Li key={i}>
                <Link href={href}>{label}</Link>
              </Li>
            ))}
          </Ul>
        </Nav>
      </NavMenu>
      <Buttons>{children}</Buttons>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 0;

  @media ${(props) => props.theme.media.sm} {
    flex: 0 1 0;
  }
`;

const Buttons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 8px;
`;

const Nav = styled.nav``;

interface UlProps {
  open: boolean;
}

const Ul = styled.ul<UlProps>`
  display: flex;
  justify-content: center;
  position: static;

  @media ${(props) => props.theme.media.sm} {
    position: absolute;
    top: 3rem;
    left: 0;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 1;

    display: ${(props) => (props.open ? "flex" : "none")};
  }
`;

const Li = styled.li`
  padding: 1rem;
  list-style: none;

  @media ${(props) => props.theme.media.sm} {
    padding: 0;
    width: 100%;
    background-color: ${(props) => props.theme.color.paper};
  }
`;

const MenuButton = styled.button`
  display: none;
  @media ${(props) => props.theme.media.sm} {
    display: block;
  }
`;

const Link = styled(DefaultLink)`
  color: ${(props) => props.theme.color.text.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline dotted;
  }

  @media ${(props) => props.theme.media.sm} {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dotted ${(props) => props.theme.color.text.secondary};

    &:hover {
      text-decoration: none;
      background-color: ${(props) => props.theme.color.accent};
    }
  }
`;
