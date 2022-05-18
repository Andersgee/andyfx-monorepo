import styled from "styled-components";
import visibilityOn from "./visibilityOn.svg";
import visibilityOff from "./visibilityOff.svg";
import iconstyle from "../../theme/iconstyle";

type Props = {
  on?: boolean;
  className?: string;
};

export default function Visibility({ on, className }: Props) {
  return on ? <On className={className} /> : <Off className={className} />;
}

const On = styled(visibilityOn)`
  ${iconstyle}
  > path {
    fill: ${(props) => props.theme.color.text.secondary};
  }

  &:hover {
    > path {
      fill: ${(props) => props.theme.color.text.primary};
    }
  }
`;

const Off = styled(visibilityOff)`
  ${iconstyle}
  > path {
    fill: ${(props) => props.theme.color.text.secondary};
  }

  &:hover {
    > path {
      fill: ${(props) => props.theme.color.text.primary};
      stroke: ${(props) => props.theme.color.text.primary};
    }
  }
`;
