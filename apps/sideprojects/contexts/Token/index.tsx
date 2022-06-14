import accounts from "lib/accounts";
import React, { createContext, useContext, useState } from "react";

interface Props {
  refreshToken?: string;
  accessToken?: string;
  expireTime?: number;
  getRefreshToken: () => void;
  revokeRefreshToken: () => void;
  getAccessToken: () => void;
}

const defaultValue: Props = {
  getRefreshToken: () => {},
  revokeRefreshToken: () => {},
  getAccessToken: () => {},
};

export const TokenContext = createContext(defaultValue);

interface ProviderProps {
  children: React.ReactNode;
}

export function TokenProvider({ children }: ProviderProps) {
  const [refreshToken, setRefreshToken] = useState<string | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [expireTime, setExpireTime] = useState<number | undefined>(undefined);

  const getAccessToken = async () => {
    if (!refreshToken) {
      console.log("no refreshToken");
      return;
    }
    try {
      const res = await accounts.request("/token", { headers: { Authorization: refreshToken } });
      const { accessToken, expires_in_seconds } = await res.json();
      setAccessToken(accessToken);
      setExpireTime(Date.now() + parseInt(expires_in_seconds, 10) * 1000);
    } catch (err) {
      setAccessToken(undefined);
      setExpireTime(undefined);
    }
  };

  const getRefreshToken = async () => {
    try {
      const { refreshToken } = await accounts.get("/token/refresh");
      setRefreshToken(refreshToken);
    } catch (err) {
      setRefreshToken(undefined);
    }
  };

  const revokeRefreshToken = async () => {
    try {
      await accounts.remove("/token/refresh");
      setRefreshToken(undefined);
      setAccessToken(undefined);
      setExpireTime(undefined);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TokenContext.Provider
      value={{ refreshToken, accessToken, expireTime, getAccessToken, getRefreshToken, revokeRefreshToken }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export const useTokenContext = () => useContext(TokenContext);
