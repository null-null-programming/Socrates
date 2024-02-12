import useCheckSession from "@/components/UseCheckSession"; // 正しいインポートパスを確認してください
import { AuthProvider, useAuth } from "@/context/auth";
import { logEvent } from "firebase/analytics";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { analytics } from "../lib/firebase";
import "../styles/global.css";

function WithSessionCheck({ children }) {
  const user = useAuth(); // AuthProvider内部でuseAuthを使用
  useCheckSession(user?.id);
  return <>{children}</>; // 子コンポーネントをそのまま表示
}
// ページ遷移アニメーションのためのラッパーコンポーネント
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined" && analytics) {
        logEvent(analytics, "page_view", {
          page_path: window.location.pathname,
        });
      }
    };

    // 初回とルート変更時にページビューをログ
    handleRouteChange(); // 初回ロードでの呼び出し
    Router.events.on("routeChangeComplete", handleRouteChange);

    // クリーンアップ関数
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <AnimatePresence>
      <AuthProvider>
        <WithSessionCheck>
          <PageTransition key={router.route}>
            <Component {...pageProps} />
          </PageTransition>
        </WithSessionCheck>
      </AuthProvider>
    </AnimatePresence>
  );
}
