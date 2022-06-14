import { useEffect, useState } from "react";
import styled from "styled-components";
import { GridItem, Section } from "@andyfx/ui/atoms/";
//import { ImageStatic } from "@andyfx/ui/atoms";
import { AddIcon } from "@andyfx/ui/icons";
import NextImage from "next/image";
import type { Target } from "@andyfx/svgbattle-api/src/models/target";

interface Props {
  targets: Target[];
  className?: string;
}

function svgObjectUrl(svg: string) {
  return URL.createObjectURL(
    new Blob([svg], {
      type: "image/svg+xml",
    })
  );
}

export default function Battles({ targets, className }: Props) {
  const [dataurls, setDataurls] = useState<string[]>(() => targets.map(() => "/battle/placeholder.svg"));
  useEffect(() => {
    const urls = targets.map((target) => svgObjectUrl(target.svg));
    setDataurls(urls);
  }, [targets]);

  return (
    <Container title="battles" className={className}>
      <Item>
        <A href={`/b/new`}>
          <AddContainer width={200} height={200}>
            <StyledAddIcon />
          </AddContainer>
          <Label>Create new</Label>
        </A>
      </Item>

      {!!dataurls.length &&
        targets.map((target, i) => {
          return (
            <Item key={target._id}>
              <A href={`/b/${target.shortId}`}>
                {/*<ImageStatic src={images[i]} alt={target.title} />*/}
                <ImageContainer width={200} height={200}>
                  <Img
                    src={dataurls[i]}
                    alt={target.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                  />
                </ImageContainer>
                <Label>{target.title}</Label>
              </A>
            </Item>
          );
        })}
    </Container>
  );
}

const StyledAddIcon = styled(AddIcon)`
  width: 70%;
  height: 70%;
`;

const Img = styled(NextImage)`
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
`;

interface ImageContainerProps {
  readonly width: number;
  readonly height: number;
}

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const A = styled.a`
  //-webkit-transform: scale(1, 1);
  //transform: scale(1, 1);

  &:hover {
    > div > span > img {
      //background-color: rgba(255, 255, 255);
      opacity: 0.8;

      //width: 480px;
      //height: 480px;
      -webkit-transform: scale(1.1, 1.1);
      transform: scale(1.1, 1.1);
    }
  }
`;

const Item = styled(GridItem)`
  position: relative;
  box-shadow: ${(props) => props.theme.shadow[5]};
`;

const AddContainer = styled.div<ImageContainerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
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
