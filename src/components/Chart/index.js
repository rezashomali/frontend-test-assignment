import React, { useEffect, useRef } from "react";
import { Chart as ChartJs } from "chart.js";

const Chart = ({ riskLevel, labels, dataGood, dataMedian, dataBad }) => {
  const canvas = useRef();

  useEffect(() => {
    drawChart();
  }, [riskLevel]);

  const drawChart = () => {
    const data = {
      datasets: [
        {
          data: dataGood,
          label: "Good performance",
          borderColor: "rgba(100, 255, 100, 0.2)",
          fill: false,
          pointRadius: 0,
        },
        {
          data: dataMedian,
          label: "Median performance",
          borderColor: "rgba(100, 100, 100, 0.2)",
          fill: false,
          pointRadius: 0,
        },
        {
          data: dataBad,
          label: "Bad performance",
          borderColor: "rgba(255, 100, 100, 0.2)",
          fill: false,
          pointRadius: 0,
        },
      ],
      labels,
    };

    const options = {
      responsive: true,
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Years",
            },
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Valuation (EUR)",
            },
          },
        ],
      },
    };

    const config = {
      type: "line",
      data,
      options,
    };

    const context = canvas.current.getContext("2d");
    const myChart = new ChartJs(context, config);
  };

  return (
    <div>
      <canvas ref={canvas} width={600} height={400} />
    </div>
  );
};

export default Chart;
