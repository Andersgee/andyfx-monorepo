import VisibilityOnSvg from "./visibilityOn.svg";
import VisibilityOffSvg from "./visibilityOff.svg";
import createStyledSvg from "../createStyledSvg";

const VisibilityOn = createStyledSvg(VisibilityOnSvg);
const VisibilityOff = createStyledSvg(VisibilityOffSvg);

type Props = {
  on?: boolean;
  className?: string;
};

export default function Visibility({ on, className }: Props) {
  return on ? <VisibilityOn className={className} data-icon /> : <VisibilityOff className={className} data-icon />;
}
