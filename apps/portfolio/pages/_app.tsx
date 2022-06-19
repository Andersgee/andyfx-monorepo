import type { AppProps } from "next/app";
import { ThemeProvider } from "@andyfx/ui";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="andyfx.net">
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  );
}
