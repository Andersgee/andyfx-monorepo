import type { AppProps } from "next/app";
import { ThemeProvider } from "@andyfx/ui";
import { UserProvider } from "contexts/User";
import Layout from "components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
}
