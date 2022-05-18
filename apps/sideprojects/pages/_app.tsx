import type { AppProps } from "next/app";
import { ThemeProvider } from "ui";
import { UserProvider } from "contexts/User";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
