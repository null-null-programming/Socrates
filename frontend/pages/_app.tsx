import { AuthProvider } from "@/context/auth";
import type { AppProps } from "next/app";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
