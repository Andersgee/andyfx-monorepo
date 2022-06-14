import type { NextPage } from "next";
import { Head } from "@andyfx/ui/atoms";
import Layout from "templates/Layout";
import { TokenProvider } from "contexts/Token";
import EditProfile from "components/organisms/EditProfile";

const Page: NextPage = () => {
  return (
    <TokenProvider>
      <Head
        title="profile"
        description="Your profile."
        domainUrl="https://web.andyfx.se"
        url="https://web.andyfx.se/profile"
      />
      <Layout defaultHeader={false}>
        <EditProfile />
      </Layout>
    </TokenProvider>
  );
};

export default Page;
