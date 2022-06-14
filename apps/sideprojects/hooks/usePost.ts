import useSWR from "swr";
import api from "lib/api";
import type { Post } from "@andyfx/sideprojects-api/src/models/post";

const fetcher = (route: string) => api.get<Post>(route);

export function usePost(id?: string) {
  const { data, error, mutate } = useSWR(id && `/post/${id}`, fetcher);
  return { post: data, error, mutate };
}
