import type { NextPage } from "next";
import { Head } from "@andyfx/ui/atoms";
import Layout from "components/Layout/Content";
import TermsOfService from "components/TermsOfService";

const Page: NextPage = () => {
  return (
    <>
      <Head
        title={`Terms of Service`}
        description="Andyfx Terms of Service."
        domainUrl="https://myaccount.andyfx.net"
        url="https://myaccount.andyfx.net/terms"
      />
      <Layout>
        <TermsOfService />
      </Layout>
    </>
  );
};

export default Page;
