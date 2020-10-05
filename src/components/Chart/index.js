import React, { useEffect, useRef } from "react";
import { Chart as ChartJs } from "chart.js";
import { calculateTimeSeries } from "../../utils/utils";
import cones from "../../../cones";

const Chart = ({ riskLevel }) => {
  const canvas = useRef();

  useEffect(() => {
    drawChart();
  }, [riskLevel]);

  const drawChart = () => {
    const { mu, sigma } = cones.filter(
      (cone) => cone.riskLevel == riskLevel
    )[0];
    const fee = 0.01;

    const timeSeries = calculateTimeSeries({
      mu,
      sigma,
      years: 10,
      initialSum: 10000,
      monthlySum: 200,
      fee,
    });

    const labels = timeSeries.median.map((v, idx) =>
      idx % 12 == 0 ? idx / 12 : ""
    );
    const dataMedian = timeSeries.median.map((v) => v.y);
    const dataGood = timeSeries.upper95.map((v) => v.y);
    const dataBad = timeSeries.lower05.map((v) => v.y);

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
    new ChartJs(context, config);
  };

  return (
    <div>
      <canvas ref={canvas} width={600} height={400} />
    </div>
  );
};

export default Chart;
