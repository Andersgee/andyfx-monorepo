import styled from "styled-components";
import { GridItem } from "ui/atoms/";
import svgs from "./svgs";

interface Props {
  className?: string;
}

export default function SvgMosaic({ className }: Props) {
  const large = [4, 5, 11, 24, 37, 47, 61, 75, 86, 93];
  const wide = [0];
  const contrastText = [12, 14, 18, 22, 23, 29, 32, 54, 73, 88, 95];

  return (
    <Container className={className}>
      {svgs.map(({ name, Svg }, i) => {
        const width = large.includes(i + 1) || wide.includes(i + 1) ? 2 : 1;
        const height = large.includes(i + 1) ? 2 : 1;
        //const width = 2;
        //const height = 2;
        const contrast = contrastText.includes(i + 1);
        return (
          <Item key={i} width={width} height={height}>
            <Label contrast={contrast}>{`#${i + 1} - ${name}`}</Label>
            <Svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label={name} role="img" />
          </Item>
        );
      })}
    </Container>
  );
}

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
  gap: 1rem;
  width: 100%;
  max-width: 1200px;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: dense;

  @media ${(props) => props.theme.media.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.media.lg} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Item = styled(GridItem)`
  background-color: ${(props) => props.theme.color.background};
  box-shadow: ${(props) => props.theme.shadow[5]};
`;
