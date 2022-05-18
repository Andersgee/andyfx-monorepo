import React, { createContext, useState, useContext } from "react";
import Script from "next/script";
import api from "lib/api";
import type { User } from "api/src/models/user";
import { useUser } from "hooks/useUser";
import { useLocalStorage } from "usehooks-ts";

const GOOGLE_CLIENTID = process.env.NEXT_PUBLIC_GOOGLE_CLIENTID;

interface Props {
  userId?: string;
  user?: User;
  handleLoginReponse: (res: Response) => void;
  logout: () => void;
  mutateUser: () => void;
  token?: Token;
  setToken: React.Dispatch<React.SetStateAction<Token | undefined>>;
}

const defaultValue: Props = {
  handleLoginReponse: async () => {},
  logout: () => {},
  mutateUser: () => {},
  setToken: () => {},
};

export const UserContext = createContext<Props>(defaultValue);

interface ProviderProps {
  children: React.ReactNode;
}

interface Token {
  refreshToken: string;
}

export function UserProvider({ children }: ProviderProps) {
  const [userId, setUserId] = useLocalStorage<string | undefined>("userId", undefined);
  const [token, setToken] = useState<Token | undefined>(undefined);
  const { user, mutate: mutateUser } = useUser(userId);

  const logout = () => {
    try {
      api.remove("/auth").then(() => {
        setUserId(undefined);
        window?.google?.accounts.id.disableAutoSelect();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoginReponse = async (res: Response) => {
    try {
      const json = await res.json();
      setUserId(json.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleAccountsResponse = (response: CredentialResponse) => {
    try {
      const googleIdToken = response.credential; //jwt
      api.post("/auth/google", { idToken: googleIdToken }).then((json) => {
        setUserId(json.id);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ userId, user, mutateUser, logout, handleLoginReponse, token, setToken }}>
      {children}
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => {
          window?.google?.accounts.id.initialize({
            client_id: GOOGLE_CLIENTID,
            callback: handleGoogleAccountsResponse,
          });
          /*
          window?.google?.accounts.id.renderButton(
            document.getElementById("signInWithGoogleButton"),
            { theme: "outline", size: "large" } // customization attributes
          );
          */
          //window?.google?.accounts.id.prompt(); //display the One Tap dialog
        }}
      />
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
