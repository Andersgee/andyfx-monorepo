import useSWR from "swr";
import api from "lib/api";
import type { User } from "api/src/models/user";

const fetcher = (id: string) => api.get<User>(`/user/${id}`);

export function useUser(id?: string) {
  const { data, error, mutate } = useSWR(id, fetcher);
  return { user: data, error, mutate };
}
