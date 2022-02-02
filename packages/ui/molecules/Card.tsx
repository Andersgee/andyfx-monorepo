import styled from "styled-components";
import { ImageCover } from "../atoms/ImageCover";
import { Button } from "../atoms/Button";
import { Link } from "../atoms/Link";

interface Props {
  imgSrc: string;
  imgAlt: string;
  href: string;
  title: string;
  description: string;
  className?: string;
}

/**
 * lets get mui as reference
 * 1. image (aspect ratio 2.5)
 * 2. title
 * 3. text
 * 4. action1 action2
 */
export function Card({ imgSrc, imgAlt, href, title, description, className }: Props) {
  return (
    <Container className={className}>
      <Link href={href}>
        <Img src={imgSrc} alt={imgAlt} width="100%" height="9rem" />
      </Link>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Link href={href}>
          <ActionButton>button</ActionButton>
        </Link>
      </Content>
    </Container>
  );
}

const Content = styled.div`
  grid-area: content;
  padding: 1rem;
  display: grid;
  grid-template:
    "title title" auto
    "description description" minmax(5rem, auto)
    "action1 action2" auto
    / auto auto;
`;

const Container = styled.div`
  display: grid;
  grid-template:
    "image" 9rem
    "content" auto
    / auto;
  width: 40ch;
  box-shadow: ${(props) => props.theme.shadow[5]};
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.paper};
`;

const Img = styled(ImageCover)`
  grid-area: image;
`;

const Title = styled.h3`
  grid-area: title;
`;

const Description = styled.p`
  grid-area: description;
`;

const ActionButton = styled(Button)`
  grid-area: action1;
`;
