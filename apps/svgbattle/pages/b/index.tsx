import type { NextPage } from "next";
import styled from "styled-components";
import { Head } from "@andyfx/ui/atoms";
import Layout from "components/Layout/Battle";
import Battles from "components/Battles";
import api from "lib/api";
import type { Target } from "@andyfx/svgbattle-api/src/models/target";

interface Props {
  targets: Target[];
}

const Page: NextPage<Props> = ({ targets }: Props) => {
  return (
    <>
      <Head
        title="Svg Battle"
        description="Svg Battle. Learn svg markup."
        domainUrl="https://svgbattle.andyfx.net"
        url="https://svgbattle.andyfx.net"
      />
      <Layout>
        <article>
          <Introduction>
            <div>
              <h2>Svg Battle</h2>
            </div>
          </Introduction>
        </article>
        <Battles targets={targets} />
      </Layout>
    </>
  );
};

const Introduction = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 2rem 0;
`;

export default Page;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const targets = await api.get<Target[]>(`/target`);
  return {
    props: {
      targets,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
