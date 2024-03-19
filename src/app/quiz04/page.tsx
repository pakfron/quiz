"use client";
import React, { useEffect, useState } from "react";

import ChartBar from "./ChartBar";
import ChartPie from "./ChartPie";


type Props = {};

export default function Quiz04({}: Props) {
  const [chartData, setChartData] = useState<any[]>([]);
  useEffect(() => {
    respone();
  }, []);

  const label = chartData.map((el) => el.City);
  const data1 = chartData.map((el) => el.Population);

  const dataChartBar = {
    labels: label,
    datasets: [
      {
        label: 'Range by Country',
        data: data1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataChartPie = {
    labels: label,
    datasets: [
      {
        label: "Range by Country",
        data: data1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const respone = async () => {
    try {
      const respone = await fetch("https://www.trcloud.co/test/api.php");
      const repo = await respone.json();
      setChartData(repo);
    } catch (error) {
      throw error;
    }
  };
  const options = {};

  return (
    <div>
      Quiz04
      <div className="flex
      "> 
        <div className="w-[700px]">
          <ChartBar data={dataChartBar} />
        </div>
        <div className="w-[700px]">
          <ChartPie data={dataChartPie} />
        </div>
      </div>
    </div>
  );
}
