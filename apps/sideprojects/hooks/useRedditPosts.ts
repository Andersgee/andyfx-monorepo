import useSWR from "swr";
import api from "lib/api";
import type { RedditResponse } from "@andyfx/sideprojects-api/src/models/reddit";

const fetcher = async (route: string) => {
  const json = await api.get<RedditResponse>(route);
  return json.data.children.map((child) => child.data);
};

export function useRedditPosts(path: string) {
  const { data, error } = useSWR(`/reddit${path}`, fetcher);
  return { posts: data, error };
}
