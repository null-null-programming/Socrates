import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// 必要な機能を登録
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ user }) => {
  const chartData = {
    labels: ["ST", "LA", "NA", "FX", "LD", "CC"],
    datasets: [
      {
        label: user.userName,
        data: [user.ST, user.LA, user.NA, user.FX, user.LD, user.CC],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 3,
      },
    ],
  };

  console.log(user);

  const options = {
    scales: {
      r: {
        ticks: {
          color: "white", // 目盛りの文字色を白に設定
          backdropColor: "transparent", // 目盛りの背景色を透明に設定
        },
        pointLabels: {
          color: "white", // ポイントラベル（軸のラベル）の文字色を白に設定
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.5)", // 角度線の色を白（半透明）に設定
        },
        grid: {
          color: "rgba(255, 255, 255, 0.5)", // グリッドラインの色を白（半透明）に設定
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // 凡例の文字色を白に設定
        },
      },
      title: {
        display: true,
        text: "Your Chart Title",
        color: "white", // タイトルの文字色を白に設定
      },
    },
  };

  return <Radar data={chartData} options={options} />;
};

export default RadarChart;
