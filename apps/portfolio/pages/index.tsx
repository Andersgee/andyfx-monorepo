import type { NextPage } from "next";
import styled from "styled-components";
import Head from "@andyfx/ui/atoms/Head";
import Layout from "components/Layout";
import ProjectCards from "components/ProjectCards";

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="andyfx"
        description="Andyfx latest web projects and contact."
        domainUrl="https://www.andyfx.net"
        url="https://www.andyfx.net"
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

export default Page;
