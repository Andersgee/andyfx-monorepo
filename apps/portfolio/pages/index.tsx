import type { NextPage } from "next";
//import { Button, GridItem } from "ui/atoms";
import styled from "styled-components";
import { Head } from "ui/atoms/Head";
//import shadertext from "../public/someshader.glsl";
//import normaltext from "../public/sometext.txt";
import { Layout } from "components/Layout";
import { ProjectCards } from "components/ProjectCards";

const HomePage: NextPage = () => {
  return (
    <>
      <Head
        title="andyfx"
        description="Andyfx latest web projects and contact."
        domainUrl="https://andyfx.se"
        url="https://andyfx.se"
      />
      <Layout>
        <article>
          <Introduction>
            <h2>Latest Projects</h2>
          </Introduction>
        </article>
        <ProjectCards />
      </Layout>
    </>
  );
};

const Introduction = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 2rem 0;
  color: ${(props) => props.theme.color.text.secondary};
`;

export default HomePage;
