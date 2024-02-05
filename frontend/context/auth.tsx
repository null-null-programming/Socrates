import { auth, db } from "@/lib/firebase";
import { User } from "@/types/user";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type UserContextType = User | null | undefined;

const AuthContext = createContext<UserContextType>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserContextType>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const ref = doc(db, `users/${firebaseUser.uid}`);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const appUser = (await getDoc(ref)).data() as User;
          setUser(appUser);
        } else {
          const appUser: User = {
            id: firebaseUser.uid,
            name: firebaseUser.displayName!,
          };

          setDoc(ref, appUser).then(() => {
            setUser(appUser);
          });
        }
      } else {
        setUser(null);
      }

      return unsubscribe;
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
