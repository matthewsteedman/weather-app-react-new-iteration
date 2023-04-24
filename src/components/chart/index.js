import { Line } from "react-chartjs-2";
import styles from "./styles.module.scss";
import Chart from "chart.js/auto";
const LineChart = ({ getMaxTemperatureData, getMinTemperature, labels }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "maxTemp",
        data: getMaxTemperatureData(),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.1,
      },
      {
        label: "minTemp",
        data: getMinTemperature(),
        backgroundColor: "rgb(53, 162, 235)",
        borderColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    scales: {
      yAxes: {
        grid: {
          drawBorder: true,
          color: "#FFFFFF",
        },
        ticks: {
          beginAtZero: true,
          color: "white",
          fontSize: 12,
        },
      },
      xAxes: {
        grid: {
          drawBorder: true,
          color: "#FFFFFF",
        },
        ticks: {
          beginAtZero: true,
          color: "white",
          fontSize: 12,
        },
      },
    },
  };
  return (
    <Line
      data={data}
      options={options}
      className={styles.chart}
      chart={Chart}
    />
  );
};

export default LineChart;
