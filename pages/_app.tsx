import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    let unsubscribe: any;
    if (user)
      unsubscribe = firestore
        .collection('users')
        .doc(user.uid)
        .onSnapshot(doc => {
          setUsername(doc.data()?.username);
        });
    else setUsername(undefined);

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return (
    <UserContext.Provider value={{ user, username }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
