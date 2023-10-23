"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { generateData } from "@/app/libs";
import { useTheme } from "next-themes";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function ChartGraph() {
  const { theme, setTheme } = useTheme();
  let generate: any = generateData();
  const data: any = {
    labels: generate.labels,
    datasets: [
      {
        label: "Stock Price",
        data: generate.data,
        borderColor: theme === "light" ? "black" : "white",
        fill: false,
      },
    ],
  };

  var options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: 15,
      },
    },
  };
  return (
    <>
      <div className="w-full border my-6 p-6 rounded-lg">
        <Line options={options} className="w-full " data={data} />
      </div>
    </>
  );
}

export default ChartGraph;
