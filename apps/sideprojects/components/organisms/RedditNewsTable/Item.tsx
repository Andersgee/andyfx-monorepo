import styled from "styled-components";
import type { Post } from "hooks/useRedditPosts";
import { scoreformat } from "./utils";
import { Link } from "@andyfx/ui/atoms";

type Props = {
  post: Post;
  className?: string;
};

export default function Item({ post, className }: Props) {
  return (
    <Container className={className}>
      <Title>{post.title}</Title>
      <Details>
        {`score: ${scoreformat(post.score)}, source: ${post.domain}, `}
        <Link href={`https://www.reddit.com${post.permalink}}`}>view on reddit</Link>
      </Details>
    </Container>
  );
}

const Container = styled.div`
  text-transform: none;
  cursor: default;

  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  width: 100%;
  text-align: left;
  font-weight: ${(props) => props.theme.font.weight.regular};

  &:hover {
    background-color: ${(props) => props.theme.color.paper};
    box-shadow: 0 0 0.5rem 1px ${(props) => props.theme.color.accent};
  }
`;

const Title = styled.p`
  padding: 0;
  font-size: ${(props) => props.theme.font.size.medium};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.color.text.primary};
`;

const Details = styled.p`
  //color: ${(props) => props.theme.color.text.secondary};
  font-size: ${(props) => props.theme.font.size.small};
`;
