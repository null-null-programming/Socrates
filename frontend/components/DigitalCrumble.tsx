import { motion } from "framer-motion";

const DigitalCrumble = () => {
  const grid = Array.from({ length: 5 * 5 }); // グリッドの大きさを設定 (ここでは5x5とする)
  const duration = 3; // 動作の期間設定

  // グリッドの各要素に対してアニメーションを適用
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
      {grid.map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }} // 初期状態
          animate={{ opacity: 1, scale: 1 }} // マウント時
          exit={{ opacity: 0, scale: 0 }} // アンマウント時
          transition={{
            ease: "easeInOut",
            duration,
            delay: Math.random() * duration, // ランダムな遅延で"ぱらぱら"効果を生む
          }}
          style={{
            border: "1px solid black", // グリッドの境界線を見せるため(デバッグ用)
            placeSelf: "stretch",
          }}
        />
      ))}
    </div>
  );
};

export default DigitalCrumble;
