import useSWR from "swr";
import api from "lib/api";
import type { User } from "api/src/models/user";

const fetcher = (route: string) => api.get<User>(route);

export function useMyUser() {
  const { data, error, mutate } = useSWR(`/user`, fetcher);
  return { myUser: data, error, mutate };
}
