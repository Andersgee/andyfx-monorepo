import styled from "styled-components";
//import {Signature} from "@andyfx/ui/molecules";
import { AndyfxIcon } from "@andyfx/ui/icons";
import { Navbar, ToggleThemeButton } from "@andyfx/ui/molecules";
import { Link } from "@andyfx/ui/atoms";
import AccountButton from "components/AccountButton";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Layout({ className, children }: Props) {
  return (
    <Container className={className}>
      <Nav>
        <ToggleThemeButton />
        <AccountButton />
      </Nav>
      <Main>{children}</Main>
      <Footer>
        <div>
          <div>
            <StyledLink href="/">svgbattle</StyledLink>
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
    "footer" max-content
    / auto;
`;

const Logo = styled(AndyfxIcon)`
  width: 60px;
  height: 50px;
`;

const LogoLink = styled.a`
  //position: relative;
  //height: max(13rem, 33vh);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.text.secondary};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: 2rem;
  padding: 0.25rem 0 0 0;
  text-decoration: none;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color.text.secondary};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: 2rem;
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
