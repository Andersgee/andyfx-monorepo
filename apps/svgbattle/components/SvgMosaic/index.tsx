import styled from "styled-components";
import { GridItem } from "ui/atoms/";
import svgs from "./svgs";

interface Props {
  className?: string;
}

const BASEWIDTH = 200;
const BASEHEIGHT = 150;
const LARGE = [4, 5, 11, 24, 37, 47, 61, 75, 86, 93, 103];
const CONTRASTTEXT = [12, 14, 18, 22, 23, 29, 32, 54, 73, 88, 95, 105];

export default function SvgMosaic({ className }: Props) {
  return (
    <Container className={className}>
      {svgs.map(({ name, Svg }, i) => {
        const width = LARGE.includes(i + 1) ? 2 : 1;
        const height = LARGE.includes(i + 1) ? 2 : 1;
        const contrast = CONTRASTTEXT.includes(i + 1);
        return (
          <Item key={i} width={width} height={height}>
            <Label contrast={contrast}>{`#${i + 1} - ${name}`}</Label>
            <Svg
              width={`${BASEWIDTH * width + (width - 1) * 16}px`}
              height={`${BASEHEIGHT * height + (height - 1) * 16}px`}
              preserveAspectRatio="xMidYMid slice"
              aria-label={name}
              role="img"
            />
          </Item>
        );
      })}
    </Container>
  );
}

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
  color: ${(props) => (props.contrast ? "#000" : "#fff")};
  bottom: 0;
  left: 0.5rem;
  font-size: ${(props) => props.theme.font.size.small};
`;

const Container = styled.div`
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
