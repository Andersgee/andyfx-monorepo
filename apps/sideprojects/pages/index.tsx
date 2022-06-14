import type { NextPage } from "next";
import { Head } from "@andyfx/ui/atoms";
import Layout from "templates/Layout";

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="sideprojects"
        description="Various sideprojects and personally useful web apps."
        domainUrl="https://web.andyfx.net"
        url="https://web.andyfx.net"
      />
      <Layout>
        <p>Content</p>
      </Layout>
    </>
  );
};

export default Page;
