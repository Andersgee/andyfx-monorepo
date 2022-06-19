import type { AppProps } from "next/app";
import { ThemeProvider } from "@andyfx/ui";
import { UserProvider } from "contexts/User";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="svgbattle.andyfx.net">
      <ThemeProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </PlausibleProvider>
  );
}
