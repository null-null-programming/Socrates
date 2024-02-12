import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppUser {
  id: string;
  name: string | null;
}

interface AuthContextType {
  user: AppUser | null;
  token: string | null;
}

const AuthContext = createContext<AuthContextType>({ user: null, token: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          try {
            const token = await firebaseUser.getIdToken();
            setToken(token);
          } catch (error) {
            console.error("トークンの取得に失敗しました", error);
            setToken(null);
          }

          const userRef = doc(db, `users/${firebaseUser.uid}`);
          const snap = await getDoc(userRef);

          if (snap.exists()) {
            const appUser = snap.data() as AppUser;
            setUser(appUser);
          } else {
            const newUser: AppUser = {
              id: firebaseUser.uid,
              name: firebaseUser.displayName,
            };

            await setDoc(userRef, newUser);
            setUser(newUser);
          }
        } else {
          setUser(null);
          setToken(null);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
