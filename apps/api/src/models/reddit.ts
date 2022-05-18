export interface Post {
  domain: string;
  score: number;
  title: string;
  permalink: string;
  url: string;
  selftext: string;
  created_utc: string;
}

export interface RedditResponse {
  kind: string;
  data: {
    children: Array<{
      data: Post;
    }>;
  };
}
