import styled from "styled-components";
import Signature from "ui/molecules/Signature";
import AndyfxSvg from "ui/molecules/AndyfxSvg";
import Navbar from "ui/molecules/Navbar";
import ToggleThemeButton from "ui/molecules/ToggleThemeButton";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Layout({ className, children }: Props) {
  console.log("process.env.NEXT_PUBLIC_FIL:", process.env.NEXT_PUBLIC_FIL);
  return (
    <Container className={className}>
      <Nav>
        <ToggleThemeButton />
      </Nav>
      <Header>
        <Logo aria-label="Andyfx Logo" />
        <Title>Andyfx</Title>
      </Header>
      <Main>{children}</Main>

      <Footer>
        <div>
          <div>
            <h2>Contact</h2>
            <p>andersgee@gmail.com</p>
          </div>
          <Signature />
        </div>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template:
    "nav" 3rem
    "header" auto
    "main" auto
    "footer" auto
    / auto;
`;

const Logo = styled(AndyfxSvg)`
  width: 7.2rem;
  height: 6rem;
`;

const Header = styled.header`
  grid-area: header;
  position: relative;
  height: max(13rem, 33vh);
  display: flex;
  justify-content: center;
  align-items: center;
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
    padding: 2rem;
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
