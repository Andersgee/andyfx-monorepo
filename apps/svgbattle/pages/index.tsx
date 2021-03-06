import type { NextPage } from "next";
import styled from "styled-components";
import { Head } from "@andyfx/ui/atoms";
import Layout from "components/Layout";
import SvgMosaic from "components/SvgMosaic";

const HomePage: NextPage = () => {
  return (
    <>
      <Head
        title="Svg Battle"
        description="Svg Battle. Writing Css Battle but in svg."
        domainUrl="https://svgbattle.andyfx.net"
        url="https://svgbattle.andyfx.net"
      />
      <Layout>
        <article>
          <Introduction>
            <div>
              <h2>Svg Battle</h2>
              <p>
                A fun way to learn svg; writing <a href="https://cssbattle.dev/">CSSBattle</a> by hand in svg.
              </p>
              <p>
                While css battles can show off how great you are at css, it also does an excellent job at highlighting
                what css is not meant for: drawing images.
              </p>
              <p>
                Arguably, you are not meant to write svg images by hand either, but it turns out to be pretty
                straightforward. In any case: drawing images by writing svg is certainly more pleasant than it is by
                writing css. Below is a gallery of cssbattles recreated in svg.
              </p>
            </div>
          </Introduction>
        </article>
        <SvgMosaic />
      </Layout>
    </>
  );
};

const Introduction = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 2rem 0;
`;

export default HomePage;
