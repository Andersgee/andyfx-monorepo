import type { NextPage } from "next";
import styled from "styled-components";
import { Head } from "ui/atoms/Head";
import { Layout } from "components/Layout";
import { WeatherProvider } from "contexts/Weather";
import WeatherTable from "components/WeatherTable";

const Index: NextPage = () => {
  return (
    <WeatherProvider>
      <Head
        title="sideprojects - weather"
        description="Weather forecast in both visual and table form."
        domainUrl="https://web.andyfx.se"
        url="https://web.andyfx.se/weather"
      />
      <Layout>
        <WeatherTable />
      </Layout>
    </WeatherProvider>
  );
};

export default Index;
