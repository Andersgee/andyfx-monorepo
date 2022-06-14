import useSWR from "swr";
import api from "lib/api";
import type { Reply } from "@andyfx/sideprojects-api/src/models/reply";

const fetcher = (route: string) => api.get<Reply>(route);

export function useReply(id?: string) {
  const { data, error, mutate } = useSWR(id && `/postreply/${id}`, fetcher);
  return { postreply: data, error, mutate };
}
