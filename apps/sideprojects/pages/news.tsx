import type { NextPage } from "next";
import { Head } from "ui/atoms";
import Layout from "templates/Layout";
import RedditNewsTable from "organisms/RedditNewsTable";
import LoginDialog from "components/templates/LoginDialog";

const Index: NextPage = () => {
  return (
    <>
      <Head
        title="sideprojects - news"
        description="Simple overview of reddit news."
        domainUrl="https://web.andyfx.net"
        url="https://web.andyfx.net/news"
      />
      <LoginDialog />
      <Layout>
        <RedditNewsTable />
      </Layout>
    </>
  );
};

export default Index;
