import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { setupChart, langColors, backgroundColor, borderColor } from "../util";
import ChartsStyles from "./bsui/ChartsStyles";

const Charts = ({ langData, repoData }) => {
  const [langChartData, setLangChartData] = useState(null);
  const initLangChart = () => {
    const ctx = document.getElementById("langChart");
    const labels = langData.map((lang) => lang.label);
    const data = langData.map((lang) => lang.value);

    setLangChartData(data);

    if (data.length != null && data.length > 0) {
      const backgroundColor = langData.map(
        ({ color }) =>
          `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
      );
      const borderColor = langData.map((lang) => `${lang.color}`);
      const chartType = "pie";
      const axes = false;
      const legend = true;
      const config = {
        ctx,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        axes,
        legend,
      };
      setupChart(config);
    }
  };
  useEffect(() => {
    //   effect
    //   return () => {
    //       cleanup
    //   };
    if (langData.length > 0) {
      initLangChart();
    }
  }, []);
  const chartSize = 300;

  return (
    <div>
      <ChartsStyles>
        <div className="chart">
          <div className="lang-chart">
            <h1>Top Languages</h1>
            <canvas id="langChart" width={chartSize} height={chartSize} />
          </div>
          <div className="star-chart"></div>
          <div className="star-lang-chart"></div>
        </div>
      </ChartsStyles>
    </div>
  );
};

Charts.propTypes = {
  langData: PropTypes.array.isRequired,
  repoData: PropTypes.array.isRequired,
};

export default Charts;
