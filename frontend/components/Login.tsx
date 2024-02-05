import { useAuth } from "@/context/auth";
import { login, logout } from "@/lib/auth";
import { useState } from "react";

export default function Login() {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };
  return (
    <div>
      {user === null && !waiting && <button onClick={signIn}>Login</button>}
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
}
