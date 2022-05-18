import styled from "styled-components";
import Item from "./Item";
import { useRedditPosts } from "hooks/useRedditPosts";

interface Props {
  className?: string;
}

export default function NewsTable({ className }: Props) {
  const { posts: worldnews } = useRedditPosts("/r/worldnews/hot");
  const { posts: news } = useRedditPosts("/r/news/hot");

  if (!news || !worldnews) {
    return <div>loading</div>;
  }

  return (
    <Container className={className}>
      <List>
        <Title>/r/worldnews</Title>
        {worldnews.map((post, i) => i <= 8 && <Item key={post.permalink} post={post} />)}
      </List>
      <List>
        <Title>/r/news</Title>
        {news.map((post, i) => i <= 8 && <Item key={post.permalink} post={post} />)}
      </List>
    </Container>
  );
}

const Title = styled.h2`
  text-align: center;
  padding: 0 0 1rem 0;
  color: ${(props) => props.theme.color.text.secondary};
`;

const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  gap: 5rem;
  @media ${(props) => props.theme.media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

const List = styled.div``;
