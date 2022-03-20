import React, { useContext } from "react";
import styled from "styled-components";
import { RedditContext } from "contexts/Reddit";
import Item from "./Item";

interface Props {
  className?: string;
}

export default function NewsTable({ className }: Props) {
  const { worldnews, news } = useContext(RedditContext);

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
