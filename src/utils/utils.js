function mapDate({ t, mu, sigma, fee, initialSum, monthlySum }) {
  let yearlyReturn = mu - fee;
  let monthlyReturn = yearlyReturn / 12;
  let month = t * 12;

  let median =
    initialSum * Math.exp(yearlyReturn * t) +
    (monthlySum *
      Math.exp(monthlyReturn * (month - Math.floor(month))) *
      (Math.exp(monthlyReturn * Math.floor(month)) - 1.0)) /
      (Math.exp(monthlyReturn) - 1.0);

  return {
    median: median,
    upper95: Math.exp(Math.log(median) + Math.sqrt(t) * sigma * 1.645),
    lower05: Math.exp(Math.log(median) - Math.sqrt(t) * sigma * 1.645),
  };
}

const calculateTimeSeries = ({
  years,
  mu,
  sigma,
  fee,
  initialSum,
  monthlySum,
}) => {
  var series = [];
  for (var k = 0; k <= 12 * years; ++k) {
    series.push(mapDate({ t: k / 12, mu, sigma, fee, initialSum, monthlySum }));
  }

  let allSeries = {
    median: [],
    upper95: [],
    lower05: [],
  };

  for (var k = 0; k < series.length; k++) {
    allSeries.median.push({ y: series[k].median, x: series[k].x });
    allSeries.upper95.push({ y: series[k].upper95, x: series[k].x });
    allSeries.lower05.push({ y: series[k].lower05, x: series[k].x });
  }

  return allSeries;
};

const getCalculation = (cones, riskLevel, initialSum) => {
  const cone = cones.filter((cone) => cone.riskLevel == riskLevel)[0];
  const fee = 0.01;
  const timeSeries = calculateTimeSeries({
    mu: cone.mu,
    sigma: cone.sigma,
    years: 10,
    initialSum,
    monthlySum: 200,
    fee,
  });

  const labels = timeSeries.median.map((v, idx) =>
    idx % 12 == 0 ? idx / 12 : ""
  );

  const months = timeSeries.median.map((v, idx) => idx);
  var dataGood = timeSeries.upper95.map((v) => v.y);
  let dataMedian = timeSeries.median.map((v) => v.y);
  const dataBad = timeSeries.lower05.map((v) => v.y);

  return { labels, months, dataGood, dataMedian, dataBad };
};

export { calculateTimeSeries, getCalculation };
