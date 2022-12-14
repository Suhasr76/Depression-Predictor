import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Graph() {
  const data = {
    labels: [
      "Sequential RNN",
      "Multionomial Naive Bayes",
      "Glove",
      "Gaussian Naive Bayes",
    ], //, "Purple", "Orange"],
    datasets: [
      {
       label:'Accuracy',
        data: [51, 87, 94 , 78],
        backgroundColor: [
          "rgba(255, 99, 132,  )",
          "rgba(54, 162, 235,  )",
          "rgba(255, 206, 86,  )",
          "rgba(75, 192, 192,  )",
          //"rgba(153, 102, 255, 0.2)",
          //"rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          //"rgba(153, 102, 255, 1)",
          //"rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        grouped: true,
      },
    ],
  };
  return (
    <div>
      <div className="w-[50vw] py-20 flex justify-center text-white font-bold">
        <Bar className="text-white font-bold " data={data} />
      </div>
    </div>
  );
}
