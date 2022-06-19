import type { NextPage } from "next";
import styled from "styled-components";
import { Head } from "@andyfx/ui/atoms";
import Layout from "components/Layout/Content";
import Home from "components/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head
        title="Andyfx Account"
        description="Manage your Andyfx Account."
        domainUrl="https://myaccount.andyfx.net"
        url="https://myaccount.andyfx.net"
      />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

const Introduction = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 2rem 0;
`;

export default HomePage;
