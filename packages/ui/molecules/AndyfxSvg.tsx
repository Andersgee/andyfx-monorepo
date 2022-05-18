import styled from "styled-components";

interface Props {
  className?: string;
}

/**
 * andyfx.svg but animation defined by css
 *
 * svg animation will not trigger until entire document is loaded.
 * css animation can trigger when component is loaded
 */
export default function AndyfxSvg({ className }: Props) {
  return (
    <svg className={className} width="120" height="100" viewBox="0 0 120 100" aria-label="Andyfx Logo">
      <title>Andyfx Logo</title>
      <Path1 fill="none" stroke="hsl(353, 100%, 45%)" d="M 18 92 L 39 30 L 75 80 L 102 8" />
      <Path2 fill="none" stroke="hsl(206, 76%, 80%)" d="M 18 92 L 102 8" />
    </svg>
  );
}

const Path1 = styled.path`
  //stroke: ${(props) => props.theme.color.text.secondary};
  stroke-width: 11;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 203.96763610839844;
  stroke-dashoffset: 203.96763610839844;
  animation: strokeanimation 0.35s cubic-bezier(0.45, 0, 0.55, 1);
  animation-fill-mode: forwards;

  @keyframes strokeanimation {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const Path2 = styled.path`
  //stroke: ${(props) => props.theme.color.text.secondary};
  stroke-width: 11;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 118.79393768310547;
  stroke-dashoffset: 118.79393768310547;
  animation: strokeanimation 0.35s cubic-bezier(0.45, 0, 0.55, 1);
  animation-fill-mode: forwards;

  @keyframes strokeanimation {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
