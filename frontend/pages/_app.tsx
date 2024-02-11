import useCheckSession from "@/components/UseCheckSession"; // 正しいインポートパスを確認してください
import { AuthProvider, useAuth } from "@/context/auth";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
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
