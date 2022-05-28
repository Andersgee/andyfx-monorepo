import useSWR from "swr";
import api from "lib/api";
import type { User } from "api/src/models/user";

const fetcher = (route: string) => api.get<User>(route);

export function useUser(id?: string) {
  const { data, error, mutate } = useSWR(id && `/user/${id}`, fetcher);
  return { user: data, error, mutate };
}
