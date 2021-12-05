import { createContext } from 'react';
export const UserContext = createContext<{
  user: {
    uid: string;
    photoURL: string;
    displayName: string;
  } | null;
  username: string | null;
}>({ user: null, username: null });
