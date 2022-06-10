import type { NextPage } from "next";
import styled from "styled-components";
import { Head } from "ui/atoms";
import Layout from "components/Layout/Battle";
import Battles from "components/Battles";

const Page: NextPage = () => {
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
        <Battles />
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
