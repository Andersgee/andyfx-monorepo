import { useEffect } from "react";
import { useUserContext } from "contexts/User";

/**
 * Display the google One Tap dialog if user is not logged in already.
 *
 * doesnt return anything.
 */
export function useGoogleOneTapDialog() {
  const { user } = useUserContext();
  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        window?.google?.accounts.id.prompt(); //display the One Tap dialog
      }
    }, 3000);
  }, [user]);
}
