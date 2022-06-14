import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ChevronIcon } from "@andyfx/ui/icons";

type Props = {
  prop: string;
  children: React.ReactNode;
  className?: string;
  sortparam: string;
};

export default function SortableColumn({ prop, className, children, sortparam }: Props) {
  const router = useRouter();
  const sort = router.query[sortparam];
  const [sortProp, desc] = Array.isArray(sort) ? sort[0]?.split(":") ?? [] : sort?.split(":") ?? [];

  let newSort = "";
  if (sortProp !== prop) {
    newSort = prop;
  } else if (sortProp === prop && !desc) {
    newSort = `${prop}:desc`;
  }

  const handleClick = () =>
    router.push({ pathname: router.pathname, query: newSort ? { sort: newSort } : undefined }, undefined, {
      scroll: false,
    });

  return (
    <Th className={className} scope="col">
      <Button onClick={handleClick} active={sortProp === prop}>
        {children}
        <StyledChevronIcon dir={!!desc && sortProp === prop ? "down" : "up"} />
      </Button>
    </Th>
  );
}

const StyledChevronIcon = styled(ChevronIcon)`
  width: 24px;
  height: 24px;
`;

interface ButtonProps {
  readonly active: boolean;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    opacity: ${(props) => (props.active ? 1 : 0)};
  }

  &:hover {
    svg {
      opacity: ${(props) => (props.active ? 1 : 0.75)};
    }

    path {
      stroke: ${(props) => props.theme.color.icon.hover};
    }
  }
`;

const Th = styled.th``;
