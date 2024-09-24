import { useCallback } from "react";
import { userStore } from "../store/configUser";

export const useUser = (names) => {
    const { newUser } = userStore()

    const getName = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    newUser(names[index]);
  }, [names]);
  
  return getName;
}
