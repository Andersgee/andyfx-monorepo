import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "templates/Layout";
import Profile from "organisms/Profile";
import { Head, Link as DefaultLink } from "@andyfx/ui/atoms";

interface Props {
  userId: string;
}

const Page: NextPage<Props> = ({ userId }: Props) => {
  const { isFallback } = useRouter();
  return (
    <>
      <Head
        title={`sideprojects - profile`}
        description={`Profile page.`}
        domainUrl="https://web.andyfx.se"
        url={`https://web.andyfx.se/profile/${userId}`}
      />
      <Layout defaultHeader={false}>{isFallback ? <Title>loading...</Title> : <Profile id={userId} />}</Layout>
    </>
  );
};

export default Page;

//dont pre generate anything, but use fallback
export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_ACCOUNTS}/user/${params?.id}`);
    const user = await res.json();
    if (res.ok) {
      return {
        props: { userId: user._id },
      };
    } else {
      return { notFound: true };
    }
  } catch (error) {
    //console.error(error);
    return { notFound: true };
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled(DefaultLink)`
  font-size: ${(props) => props.theme.font.size.large};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.font.size.medium};
  padding-bottom: 1rem;
`;
