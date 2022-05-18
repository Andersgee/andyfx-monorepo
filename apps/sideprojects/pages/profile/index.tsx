import type { NextPage } from "next";
import { Head } from "ui/atoms";
import Layout from "templates/Layout";
import EditProfile from "components/organisms/EditProfile";

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="profile"
        description="Your profile."
        domainUrl="https://web.andyfx.se"
        url="https://web.andyfx.se/profile"
      />
      <Layout defaultHeader={false}>
        <EditProfile />
      </Layout>
    </>
  );
};

export default Page;
