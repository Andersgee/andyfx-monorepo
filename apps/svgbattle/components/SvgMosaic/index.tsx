import styled from "styled-components";
import { GridItem, Section } from "@andyfx/ui/atoms/";
import svgs from "./svgs";

interface Props {
  className?: string;
}

const BASEWIDTH = 200;
const BASEHEIGHT = 150;
const LARGE = [4, 5, 11, 24, 37, 47, 61, 75, 86, 93, 103];
const CONTRASTTEXT = [12, 14, 18, 22, 23, 29, 32, 54, 73, 88, 95, 105];

const CLICKABLE = [24, 36, 37, 39, 40, 41, 50, 53, 54, 55, 75];

export default function SvgMosaic({ className }: Props) {
  return (
    <Container className={className} title="svg images">
      {svgs.map(({ name, Svg }, i) => {
        const width = LARGE.includes(i + 1) ? 2 : 1;
        const height = LARGE.includes(i + 1) ? 2 : 1;
        const contrast = CONTRASTTEXT.includes(i + 1);
        const isClickable = CLICKABLE.includes(i + 1);
        return (
          <Item key={i} width={width} height={height}>
            <Label contrast={contrast}>{`#${i + 1} - ${name}`}</Label>
            {isClickable ? (
              <Svg
                role="button"
                tabIndex={0}
                onClick={() => {}}
                width={`${BASEWIDTH * width + (width - 1) * 16}px`}
                height={`${BASEHEIGHT * height + (height - 1) * 16}px`}
                preserveAspectRatio="xMidYMid slice"
                aria-hidden={false}
                aria-label={name}
              />
            ) : (
              <Svg
                role="img"
                width={`${BASEWIDTH * width + (width - 1) * 16}px`}
                height={`${BASEHEIGHT * height + (height - 1) * 16}px`}
                preserveAspectRatio="xMidYMid slice"
                aria-hidden={false}
                aria-label={name}
              />
            )}
          </Item>
        );
      })}
    </Container>
  );
}

export function SvgMosaicSimple({ className }: Props) {
  return (
    <div className={className}>
      {svgs.map(({ name, Svg }, i) => (
        <SimpleDiv key={name}>
          <Svg role="img" width="400px" height="300px" aria-hidden={false} aria-label={name} />
        </SimpleDiv>
      ))}
    </div>
  );
}

const SimpleDiv = styled.div`
  margin-top: 1rem;
`;

const Item = styled(GridItem)`
  position: relative;
  box-shadow: ${(props) => props.theme.shadow[5]};
`;

interface LabelProps {
  readonly contrast?: boolean;
}

const Label = styled.h3<LabelProps>`
  position: absolute;
  //color: ${(props) => props.theme.color.background};
  //text-shadow: ${(props) => props.theme.color.accent} 1px 0px 16px;

  //color: ${(props) => (props.contrast ? "#000" : "#fff")};
  //background-color: ${(props) => (props.contrast ? "#fff" : "#000")};
  color: ${(props) => props.theme.color.text.secondary};
  background-color: ${(props) => props.theme.color.background};

  padding: 0 4px;
  bottom: 0.125rem;
  left: 0.25rem;
  font-size: ${(props) => props.theme.font.size.small};
`;

const Container = styled(Section)`
  display: grid;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 1200px;

  grid-template-rows: auto;
  grid-template-columns: repeat(2, auto);
  grid-auto-flow: dense;

  @media only screen and (min-width: calc(200px*3 + 16px*4)) {
    grid-template-columns: repeat(3, auto);
  }

  @media only screen and (min-width: calc(200px*4 + 16px*5)) {
    grid-template-columns: repeat(4, auto);
  }

  @media only screen and (min-width: calc(200px*5 + 16px*6)) {
    grid-template-columns: repeat(5, auto);
  }

  /*
  
  */
`;
