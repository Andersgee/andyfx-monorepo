import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
//import { useRouter } from "next/router";
import { Head } from "ui/atoms";
import Layout from "components/Layout/Battle";
import Battle from "components/Battle";
import { CodeProvider } from "contexts/Code";
import { targets } from "targets";
import type { Target } from "targets";

interface Props {
  index: number;
  target: Target;
}

const Page: NextPage<Props> = ({ index, target }: Props) => {
  //const { isFallback } = useRouter();
  //const { query } = useRouter();
  //console.log(query);
  return (
    <CodeProvider>
      <Head
        title={`svgbattle - ${target.title}`}
        description={`Hand optimize svg in svgbattle.`}
        domainUrl="https://svgbattle.andyfx.net"
        url={`https://svgbattle.andyfx.net/${index}`}
      />
      <Layout>
        <Battle target={target} />
      </Layout>
    </CodeProvider>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = targets.map((v, i) => {
    return { params: { id: `${i}` } };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const i = parseInt(params?.id as string, 10);
  const target = targets[i];
  return {
    props: { index: i, target: target },
  };
};
