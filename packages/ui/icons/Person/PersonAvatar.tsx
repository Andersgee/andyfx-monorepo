import styled from "styled-components";
import PersonSvg from "./person.svg";
import iconstyle from "@andyfx/ui/theme/iconstyle";

type Props = {
  name?: string;
  className?: string;
};

/**
 * A generic icon
 *
 * or
 *
 * An icon based on name
 */
export default function Person({ name, className }: Props) {
  //name.charAt(0)
  if (name) {
    return <StyledLetterSvg name={name} className={className} />;
  } else {
    return <StyledPersonSvg className={className} />;
  }
}

const StyledPersonSvg = styled(PersonSvg)`
  ${iconstyle}
`;

function LetterSvg({ name, className }: { name: string; className?: string }) {
  const firstChar = name.charAt(0).toUpperCase();
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <text
        x="12"
        y="12"
        textAnchor="middle"
        alignmentBaseline="central"
        dominantBaseline="central"
        //stroke-width="1px"
        fontSize="14"
        //dy="-0.5" //slight movement?..
        //dx="0.5" //and right
      >
        {firstChar}
      </text>
    </svg>
  );
}

const StyledLetterSvg = styled(LetterSvg)`
  > circle {
    fill: ${(props) => props.theme.color.primary};
  }

  > text {
    fill: ${(props) => props.theme.color.text.primary};
    font-weight: ${(props) => props.theme.font.weight.medium};
    font-family: ${(props) => props.theme.font.family.body};
  }
`;
