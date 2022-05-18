import type { NextPage } from "next";
import { Head } from "ui/atoms";
import Layout from "templates/Layout";

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="sideprojects"
        description="Various sideprojects and personally useful web apps."
        domainUrl="https://web.andyfx.se"
        url="https://web.andyfx.se"
      />
      <Layout>
        <p>Content</p>
      </Layout>
    </>
  );
};

export default Page;
