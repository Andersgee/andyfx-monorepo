import type { NextPage } from "next";
import { Head } from "@andyfx/ui/atoms";
import Layout from "components/Layout/Content";
import PrivacyPolicy from "components/PrivacyPolicy";

const Page: NextPage = () => {
  return (
    <>
      <Head
        title={`Privacy Policy`}
        description="Andyfx Privacy Policy."
        domainUrl="https://myaccount.andyfx.net"
        url="https://myaccount.andyfx.net/privacy"
      />
      <Layout>
        <PrivacyPolicy />
      </Layout>
    </>
  );
};

export default Page;
