import useSWR from "swr";
import accounts from "lib/accounts";
import type { User } from "@andyfx/accounts-api/src/models/user";

const fetcher = (route: string) => accounts.get<User>(route);

export function useUser(id?: string) {
  const { data, error, mutate } = useSWR(id && `/user/${id}`, fetcher);
  return { user: data, error, mutate };
}
