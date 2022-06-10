import styled from "styled-components";
import { GridItem } from "ui/atoms/";
import { targets } from "targets";
import { Section } from "ui/atoms";
import { ImageStatic } from "ui/atoms";
import images from "./images";
interface Props {
  className?: string;
}

export default function Battles({ className }: Props) {
  return (
    <Container className={className}>
      {targets.map((target, i) => {
        return (
          <Item key={i} width={1}>
            <a href={`/battle/${i}`}>
              <ImageStatic src={images[i]} alt={target.title} />
              <Label>{target.title}</Label>
            </a>
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

  //color: ${(props) => (props.contrast ? "#000" : "#fff")};
  //background-color: ${(props) => (props.contrast ? "#fff" : "#000")};
  color: ${(props) => props.theme.color.text.secondary};
  background-color: ${(props) => props.theme.color.background};

  padding: 0 4px;
  bottom: 0.125rem;
  left: 0.25rem;
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
