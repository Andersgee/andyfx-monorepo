import type { NextPage } from "next";
import { Head } from "@andyfx/ui/atoms";
import Layout from "components/Layout/Content";
import PersonalInfo from "components/PersonalInfo";

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="Personal info"
        description="Your personal info on Andyfx."
        domainUrl="https://myaccount.andyfx.net"
        url="https://myaccount.andyfx.net/personal-info"
      />
      <Layout>
        <PersonalInfo />
      </Layout>
    </>
  );
};

export default Page;
