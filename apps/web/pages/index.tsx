import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "ui";
import { Button, GridItem } from "ui/atoms";
import styled from "styled-components";
import VercelIcon from "../public/vercel.svg";
import shadertext from "../public/someshader.glsl";
import normaltext from "../public/sometext.txt";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 5rem;
  grid-template-columns: 5rem;
`;

const Icon = styled(VercelIcon)`
  background-color: ${(props) => props.theme.color.primary};
`;

const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid>
          <GridItem>
            <Button>BUTTON HERE</Button>
          </GridItem>
          <GridItem w={2}>
            <Icon />
            <h1>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
          </GridItem>
          <GridItem x={1}>
            <p>
              Get started by editing <code>pages/index.tsx</code>
            </p>
          </GridItem>
        </Grid>

        <div>
          <p>{shadertext}</p>
          <p>{normaltext}</p>
          <p>and some regular</p>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </ThemeProvider>
  );
};

export default Home;