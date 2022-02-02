import NextHead from "next/head";

interface Props {
  title: string;
  description: string;
  image?: string;
}

/**
 * meta tags for Search Engine Optimization (SEO) and page title
 */
export function Head({ title, description, image = "/images/andyfx-192x192.png" }: Props) {
  const PUBLIC_URL = "https://andynextstarter.andyfx.net";

  const domain = "andynextstarter.andyfx.net";
  const url = "https://nexttemplate.andyfx.net/";
  const icon16 = "/icons/icon-16x16.png";
  const icon32 = "/icons/icon-32x32.png";
  const manifest = "/manifest.json";
  const themeColor = "#A2D1F1"; //control the browser theme?
  const keywords = "nextjs12 andynextstarter";

  const info1 = {
    label: "Whats the name?",
    data: "andynextstarter",
  };
  const info2 = {
    label: "What is it?",
    data: "nextjs project boilerplate",
  };
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <link rel="icon" href={icon16} type="image/png" sizes="16x16" />
      <link rel="icon" href={icon32} type="image/png" sizes="32x32" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content="Anders Gustafsson" />
      <link rel="apple-touch-icon" href={image} />
      <link rel="manifest" href={manifest} />
      <title>{title}</title>

      {/* pwa related? */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content={themeColor} />
      <meta name="keywords" content={keywords} />

      {/* facebook open graph tags*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* twitter card tags additive with the og: tags*/}
      <meta name="twitter:domain" content={domain} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />

      {/* additional info Left*/}
      <meta name="twitter:label1" content={info1.label} />
      <meta name="twitter:data1" content={info1.data} />
      {/* additional info Right*/}
      <meta name="twitter:label2" content={info2.label} />
      <meta name="twitter:data2" content={info2.data} />
    </NextHead>
  );
}
