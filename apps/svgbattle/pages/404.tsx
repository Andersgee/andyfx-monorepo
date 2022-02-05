import type { NextPage } from "next";
import { Link as DefaultLink } from "ui/atoms/Link";
import styled from "styled-components";

const NotfoundPage: NextPage = () => {
  return (
    <Container>
      <Content>
        <Title>Page Not Found</Title>
        <p>
          <Link href="/">Go To Homepage</Link>
        </p>
      </Content>
    </Container>
  );
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

export default NotfoundPage;
