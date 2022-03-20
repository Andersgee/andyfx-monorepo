import type { NextPage } from "next";
import styled from "styled-components";
import { Head } from "ui/atoms/Head";
import { Layout } from "components/Layout";
import RedditNewsTable from "components/RedditNewsTable";
import { RedditProvider } from "contexts/Reddit";

const Index: NextPage = () => {
  return (
    <RedditProvider>
      <Head
        title="sideprojects - news"
        description="Simple overview of reddit news."
        domainUrl="https://web.andyfx.se"
        url="https://web.andyfx.se/news"
      />
      <Layout>
        <RedditNewsTable />
      </Layout>
    </RedditProvider>
  );
};

export default Index;
