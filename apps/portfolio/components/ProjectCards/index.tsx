import styled from "styled-components";
import { BigCard } from "ui/molecules/BigCard";

interface Props {
  className?: string;
}

export function ProjectCards({ className }: Props) {
  return (
    <Container className={className}>
      <BigCard
        title="julia2wat"
        description="Online version of WebAssemblyText.jl. Convert Julia to WebAssembly text."
        imgSrc="/projectImages/julia2wat.png"
        imgAlt="julia2wat"
        href="https://julia2wat.herokuapp.com"
        buttonbackground="linear-gradient(135deg, #9457b0, #3f61d7)"
      />
      <BigCard
        flip
        title="Weather"
        description="Weather forecast in both visual and table format."
        imgSrc="/projectImages/weather.jpg"
        imgAlt="Weather"
        href="https://weather.andyfx.net"
        buttonbackground="linear-gradient(135deg, #5d6c80, #7f94af);"
      />
      <BigCard
        title="Våra Vägar"
        description="Map, information and maintenance needs for public roads of Sweden."
        imgSrc="/projectImages/varavagar.jpg"
        imgAlt="Våra Vägar"
        href="https://www.varavagar.se"
        buttonbackground="linear-gradient(135deg, #898f58, #c4c8a7)"
      />
      <BigCard
        flip
        title="Climate Visualizer"
        description="What the worlds carbon budget means on a local municipality level."
        imgSrc="/projectImages/climatevisualizer.png"
        imgAlt="Climate Visualizer"
        href="https://www.climatevisualizer.com"
        buttonbackground="linear-gradient(135deg, #dd574f, #ee8984)"
      />
      <BigCard
        title="Mozart AI"
        description="Neural net trained on mozart music brought to the web with webassembly."
        imgSrc="/projectImages/wasmMozart.png"
        imgAlt="Mozart AI"
        href="https://andersgee.github.io/posts/wasmMozart/index.html"
        buttonbackground="linear-gradient(135deg, #565d60, #9a9ea0)"
      />
      <BigCard
        flip
        title="Shakespeare AI"
        description="Neural net trained on shakespeare text brought to the web with webassembly."
        imgSrc="/projectImages/wasmShakespeare.png"
        imgAlt="Shakespeare AI"
        href="https://andersgee.github.io/posts/wasmShakespeare/index.html"
        buttonbackground="linear-gradient(135deg, #a68d6e, #d3bfa6)"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  gap: 3rem;
`;
