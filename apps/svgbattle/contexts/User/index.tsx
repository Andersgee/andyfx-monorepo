import React, { createContext, useState, useContext, useEffect } from "react";
import Script from "next/script";
import accounts from "lib/accounts";
import type { User } from "@andyfx/accounts-api/src/models/user";

const GOOGLE_CLIENTID = process.env.NEXT_PUBLIC_GOOGLE_CLIENTID;

interface Props {
  user?: User;
  getMyUser: () => void;
  logout: () => void;
}

const defaultValue: Props = {
  getMyUser: () => {},
  logout: () => {},
};

export const UserContext = createContext<Props>(defaultValue);

interface ProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);

  const getMyUser = async () => {
    try {
      const u = await accounts.get<User>("/user");
      setUser(u);
    } catch (err) {
      setUser(undefined);
    }
  };

  useEffect(() => {
    getMyUser();
  }, []);

  const logout = async () => {
    try {
      await accounts.remove("/auth");
      setUser(undefined);
      window?.google?.accounts.id.disableAutoSelect();
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleAccountsResponse = async (response: CredentialResponse) => {
    try {
      const googleIdToken = response.credential; //jwt
      await accounts.post("/auth/google", { idToken: googleIdToken });
      getMyUser();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ user, getMyUser, logout }}>
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
