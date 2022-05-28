import Svg from "./dragHandle.svg";
import createStyledSvg from "../createStyledSvg";
import styled from "styled-components";

const DragIcon = createStyledSvg(Svg);

type Dir = "vertical" | "horizontal";

type Props = {
  dir?: Dir;
  className?: string;
};

export default function DragIndicator({ dir = "vertical", className }: Props) {
  return <Icon dir={dir} className={className} />;
}

interface IconProps {
  readonly dir: Dir;
}

const Icon = styled(DragIcon)<IconProps>`
  //transition: transform 0.15s ease-out;
  transform: ${(props) => dir2rot(props.dir)};
`;

function dir2rot(dir: Dir) {
  if (dir === "vertical") {
    return "rotate(0deg)";
  } else {
    return "rotate(90deg)";
  }
}
