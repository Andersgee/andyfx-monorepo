import type { AppProps } from "next/app";
import { ThemeProvider } from "ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
