import useSWR from "swr";
import api from "lib/api";
import type { RedditResponse } from "api/src/models/reddit";
export type { Post } from "api/src/models/reddit";

const fetcher = async (path: string) => {
  const json = await api.get<RedditResponse>(`/reddit${path}`);
  return json.data.children.map((child) => child.data);
};

export function useRedditPosts(path: string) {
  const { data, error } = useSWR(path, fetcher);
  return { posts: data, error };
}
