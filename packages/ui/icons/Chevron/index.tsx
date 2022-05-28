import ChevronDownSvg from "./chevron.svg";
import createStyledSvg from "../createStyledSvg";
import styled from "styled-components";

const ChevronDown = createStyledSvg(ChevronDownSvg);

type Dir = "down" | "up" | "left" | "right";

type Props = {
  dir?: Dir;
  className?: string;
};

export default function Chevron({ dir = "down", className }: Props) {
  return <Icon dir={dir} className={className} />;
}

interface IconProps {
  readonly dir: Dir;
}

const Icon = styled(ChevronDown)<IconProps>`
  transition: transform 0.15s ease-out;
  transform: ${(props) => dir2rot(props.dir)};
`;

function dir2rot(dir: Dir) {
  if (dir === "right") {
    return "rotate(-90deg)";
  } else if (dir === "up") {
    return "rotate(180deg)";
  } else if (dir === "left") {
    return "rotate(90deg)";
  } else {
    return "rotate(0deg)";
  }
}
