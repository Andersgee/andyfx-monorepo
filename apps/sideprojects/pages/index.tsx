import type { NextPage } from "next";
import styled from "styled-components";
import { Head } from "ui/atoms/Head";
import { Layout } from "components/Layout";

const HomePage: NextPage = () => {
  return (
    <>
      <Head
        title="sideprojects"
        description="Various sideprojects and personally useful web apps."
        domainUrl="https://web.andyfx.se"
        url="https://web.andyfx.se"
      />
      <Layout>
        <div>grid of links sideprojects here maybe</div>
      </Layout>
    </>
  );
};

export default HomePage;
