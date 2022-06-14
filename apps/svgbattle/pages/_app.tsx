import type { AppProps } from "next/app";
import { ThemeProvider } from "@andyfx/ui";
import { UserProvider } from "contexts/User";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
}
