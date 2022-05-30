import type { NextPage } from "next";
import { Head } from "ui/atoms";
import Layout from "templates/Layout";
import UiShowcase from "templates/UiShowcase";

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="sideprojects"
        description="Various sideprojects and personally useful web apps."
        domainUrl="https://web.andyfx.net"
        url="https://web.andyfx.net/ui"
      />
      <Layout>
        <UiShowcase />
      </Layout>
    </>
  );
};

export default Page;
