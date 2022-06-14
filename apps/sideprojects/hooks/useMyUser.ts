import useSWR from "swr";
import accounts from "lib/accounts";
import type { User } from "@andyfx/accounts-api/src/models/user";

const fetcher = (route: string) => accounts.get<User>(route);

export function useMyUser() {
  const { data, error, mutate } = useSWR(`/user`, fetcher);
  return { myUser: data, error, mutate };
}
