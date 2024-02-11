import useCheckSession from "@/components/UseCheckSession"; // 正しいインポートパスを確認してください
import { AuthProvider, useAuth } from "@/context/auth";
import type { AppProps } from "next/app";
import "../styles/global.css";

function WithSessionCheck({ children }) {
  const user = useAuth(); // AuthProvider内部でuseAuthを使用
  useCheckSession(user?.id);
  return <>{children}</>; // 子コンポーネントをそのまま表示
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <WithSessionCheck>
        <Component {...pageProps} />
      </WithSessionCheck>
    </AuthProvider>
  );
}
