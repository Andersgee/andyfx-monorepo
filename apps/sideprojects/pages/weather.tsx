import type { NextPage } from "next";
import { Head } from "@andyfx/ui/atoms";
import Layout from "templates/Layout";
import { WeatherProvider } from "contexts/Weather";
import WeatherTable from "components/organisms/WeatherTable";
import LoginDialog from "components/templates/LoginDialog";

const Index: NextPage = () => {
  return (
    <>
      <LoginDialog />
      <WeatherProvider>
        <Head
          title="sideprojects - weather"
          description="Weather forecast in both visual and table form."
          domainUrl="https://web.andyfx.net"
          url="https://web.andyfx.net/weather"
        />
        <Layout>
          <WeatherTable />
        </Layout>
      </WeatherProvider>
    </>
  );
};

export default Index;
