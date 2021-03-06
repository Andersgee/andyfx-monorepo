import styled from "styled-components";
import BigCard from "@andyfx/ui/molecules/BigCard";
import img_svgbattle from "public/projectImages/svgbattle.png";
import img_julia2wat from "public/projectImages/julia2wat.png";
import img_weather from "public/projectImages/weather.jpg";
import img_varavagar from "public/projectImages/varavagar.jpg";
import img_climatevisualizer from "public/projectImages/climatevisualizer.png";
import img_wasmmozart from "public/projectImages/wasmMozart.png";
import img_wasmshakespeare from "public/projectImages/wasmShakespeare.png";

interface Props {
  className?: string;
}

export default function ProjectCards({ className }: Props) {
  return (
    <Container className={className}>
      <BigCard
        flip
        title="Svg Battle"
        description="Css Battle but written in svg. Includes some svg animations."
        imgSrc={img_svgbattle}
        imgAlt="svg battle"
        href="https://svgbattle.andyfx.net"
        buttonbackground="linear-gradient(135deg, #14313E, #93830F)"
      />
      <BigCard
        title="julia2wat"
        description="Online version of WebAssemblyText.jl. Convert Julia to WebAssembly text."
        imgSrc={img_julia2wat}
        imgAlt="julia2wat"
        href="https://julia2wat.herokuapp.com"
        buttonbackground="linear-gradient(135deg, #8B58B4, #4760D3)"
      />
      <BigCard
        flip
        title="Weather"
        description="Weather forecast in both visual and table format."
        imgSrc={img_weather}
        imgAlt="Weather"
        href="https://weather.andyfx.net"
        buttonbackground="linear-gradient(135deg, #556272, #767d8e);"
      />
      <BigCard
        title="Våra Vägar"
        description="Map, information and maintenance needs for public roads of Sweden."
        imgSrc={img_varavagar}
        imgAlt="Våra Vägar"
        href="https://www.varavagar.se"
        buttonbackground="linear-gradient(135deg, #585c3d, #828476)"
      />
      <BigCard
        flip
        title="Climate Visualizer"
        description="What the worlds carbon budget means on a local municipality level."
        imgSrc={img_climatevisualizer}
        imgAlt="Climate Visualizer"
        href="https://www.climatevisualizer.com"
        buttonbackground="linear-gradient(135deg, #c9413a, #4d4d4d)"
      />
      <BigCard
        title="Mozart AI"
        description="Neural net trained on mozart music brought to the web with webassembly."
        imgSrc={img_wasmmozart}
        imgAlt="Mozart AI"
        href="https://andersgee.github.io/posts/wasmMozart/index.html"
        buttonbackground="linear-gradient(135deg, #545657, #545657)"
      />
      <BigCard
        flip
        title="Shakespeare AI"
        description="Neural net trained on shakespeare text brought to the web with webassembly."
        imgSrc={img_wasmshakespeare}
        imgAlt="Shakespeare AI"
        href="https://andersgee.github.io/posts/wasmShakespeare/index.html"
        buttonbackground="linear-gradient(135deg, #756552, #72685C)"
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
