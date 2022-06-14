import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Head } from "@andyfx/ui/atoms";
import Layout from "components/Layout/Battle";
import Battle from "components/Battle";
import type { Target } from "@andyfx/svgbattle-api/src/models/target";
import { useRouter } from "next/router";
import styled from "styled-components";
import { CodeProvider } from "contexts/Code";
import api from "lib/api";

interface Props {
  target: Target;
}

const Page: NextPage<Props> = ({ target }: Props) => {
  const { isFallback } = useRouter();
  return (
    <CodeProvider>
      <Head
        title={isFallback ? "svgbattle" : `${target.title} - svgbattle`}
        description={`User created battle.`}
        domainUrl="https://svgbattle.andyfx.se"
        url={`https://svgbattle.andyfx.se/battle/${isFallback ? "" : target.shortId}`}
      />
      <Layout>{isFallback ? <Title>generating static site.</Title> : <Battle target={target} />}</Layout>
    </CodeProvider>
  );
};

export default Page;

//dont pre generate anything, but use fallback
export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const target = await api.get<Target>(`/target/shortId/${params?.id}`);
    return {
      props: { target: target },
    };
  } catch (error) {
    //console.error(error);
    return { notFound: true };
  }
};

const Title = styled.h1`
  font-size: ${(props) => props.theme.font.size.medium};
  padding-bottom: 1rem;
`;
