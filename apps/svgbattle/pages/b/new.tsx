import type { NextPage } from "next";
//import { useRouter } from "next/router";
import { Head } from "@andyfx/ui/atoms";
import Layout from "components/Layout/Battle";
import CreateBattle from "components/Battle/Create";
import { CodeProvider } from "contexts/Code";
//import type { Target } from "svgbattle-api/src/models/target";

interface Props {
  index: number;
}

const Page: NextPage = () => {
  return (
    <CodeProvider>
      <Head
        title={`create | svgbattle`}
        description={`Create your own battle and share it with the community.`}
        domainUrl="https://svgbattle.andyfx.net"
        url={`https://svgbattle.andyfx.net/battle/create`}
      />
      <Layout>
        <CreateBattle />
      </Layout>
    </CodeProvider>
  );
};

export default Page;
