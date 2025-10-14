import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherChart = ({ temp }) => {
  const data = {
    labels: ["Morning", "Noon", "Evening", "Night"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [temp - 2, temp, temp - 1, temp - 3],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="w-full max-w-md bg-white/20 backdrop-blur-md p-4 rounded-2xl">
      <Line data={data} />
    </div>
  );
};

export default WeatherChart;
