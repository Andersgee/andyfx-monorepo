import styled from "styled-components";
//import Signature from "ui/molecules/Signature";
import { AndyfxIcon } from "ui/icons";
import Navbar from "ui/molecules/Navbar";
import ToggleThemeButton from "ui/molecules/ToggleThemeButton";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Layout({ className, children }: Props) {
  return (
    <Container className={className}>
      <Nav>
        <ToggleThemeButton />
      </Nav>
      <Main>{children}</Main>
      <Footer>
        <div>
          <div>
            <P>svgbattle</P>
          </div>
          <div>
            <LogoLink href="https://www.andyfx.net">
              <Logo aria-label="Andyfx Logo" />
              <Title>Andyfx</Title>
            </LogoLink>
          </div>
        </div>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template:
    "nav" 3rem
    "main" auto
    "footer" auto
    / auto;
`;

const Logo = styled(AndyfxIcon)`
  width: 120px;
  height: 100px;
`;

const LogoLink = styled.a`
  //position: relative;
  //height: max(13rem, 33vh);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const P = styled.p`
  //color: ${(props) => props.theme.color.text.secondary};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: 2rem;
  padding: 0.25rem 0 0 0;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color.text.secondary};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: 3rem;
  padding: 0.25rem 0 0 0;
`;

const Nav = styled(Navbar)`
  grid-area: nav;
`;

const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 1rem;
  //background-color: #ac9f67;
`;

const Footer = styled.footer`
  grid-area: footer;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.paper};

  > div {
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    text-align: center;

    width: 100%;
    max-width: 1000px;

    @media ${(props) => props.theme.media.md_and_above} {
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;
