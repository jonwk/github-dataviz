import Chart from "chart.js";

const buildScales = (axes) => {
  const scales = {
    xAxes: [
      {
        ticks: {
          // fontFamily: something,
          fontSize: 12,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          // fontFamily: something,
          fontSize: 12,
          beginAtZero: true,
        },
      },
    ],
  };
  return axes ? scales : null;
};

const buildLegend = (legend) => {
  const label = {
    position: "right",
    labels: {
      // fontFamily: something,
    },
  };
  return legend ? label : null;
};

const setupChart = (config) => {
  const {
    ctx,
    chartType,
    labels,
    data,
    backgroundColor,
    borderColor,
    axes,
    legend,
  } = config;

  return new Chart(ctx, {
    type: chartType,
    responsive: true,
    maintainAspectRatio: false,
    data: {
      labels,
      datasets: [{ data, backgroundColor, borderColor, borderWidth: 1 }],
    },
    options: {
      scales: buildScales(axes),
      legend: buildLegend(legend),
      tooltips: {
        // titleFontFamily: something,
        // bodyFontFamily: something,
        cornerRadius: 3,
      },
    },
  });
};

export default setupChart;