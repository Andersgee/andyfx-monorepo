import styled from "styled-components";
import { ImageCover } from "ui/atoms";
import Link from "../atoms/Link";

interface Props {
  imgSrc: string | StaticImageData;
  imgAlt: string;
  href: string;
  title: string;
  description: string;
  className?: string;
  flip?: boolean;
  buttonbackground?: string;
}

export default function BigCard({
  flip = false,
  imgSrc,
  imgAlt,
  href,
  title,
  description,
  className,
  buttonbackground,
}: Props) {
  return (
    <Container className={className} flip={flip}>
      <Link href={href}>
        <Img src={imgSrc} alt={imgAlt} width="100%" height="100%" />
      </Link>
      <Content>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <ActionButton href={href} background={buttonbackground}>
          View Project
        </ActionButton>
      </Content>
    </Container>
  );
}

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;
  align-items: center;

  @media ${(props) => props.theme.media.md_and_above} {
    padding: 2rem;
    align-items: flex-start;
  }
`;

interface ContainerProps {
  flip?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template:
    "image" 1fr
    "content" 1fr
    / auto;

  box-shadow: ${(props) => props.theme.shadow[5]};
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.paper};

  @media ${(props) => props.theme.media.md_and_above} {
    grid-template:
      ${(props) => (props.flip ? `"content image"` : `"image content"`)} 30ch
      / 1fr 1fr;
  }
`;

const Img = styled(ImageCover)`
  grid-area: image;
`;

const Title = styled.h3``;

const Description = styled.p``;

interface ActionButtonProps {
  background?: string;
}

const ActionButton = styled.a<ActionButtonProps>`
  border-radius: 3em;
  background: ${(props) => props.background || "linear-gradient(135deg, #a68d6e, #d3bfa6)"};
  padding: 1rem 3rem;
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: ${(props) => props.theme.font.weight.bold};
  transition: background-color ${(props) => props.theme.transition.fast};
  color: #fff;

  &:link {
    //unvisited
    color: #fff;
  }
  &:visited {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
  &:active {
    color: #fff;
  }
`;
