import useSWR from "swr";
import api from "lib/api";
import type { PostPopulated } from "api/src/models/post";

const fetcher = (route: string) => api.get<PostPopulated[]>(route);

export function useProfilePosts(userId?: string) {
  const { data, error, mutate } = useSWR(userId && `/post/profile/${userId}`, fetcher);
  return { posts: data, error, mutate };
}
