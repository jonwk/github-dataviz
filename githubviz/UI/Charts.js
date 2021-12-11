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

    if (data.length > 0) {
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

  const [starChartData, setstarChartData] = useState(null);
  const initStartChart = () => {
    const ctx = document.getElementById("starChart");
    const MAX = 5;
    const sortProperty = "stargazers_count";
    const mostStarredRepos = repoData
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, MAX);
    const labels = mostStarredRepos.map((repo) => repo.name);
    const data = mostStarredRepos.map((repo) => repo[sortProperty]);

    setstarChartData(data);

    if (data.length > 0) {
      //   const backgroundColor = langData.map(
      //     ({ color }) =>
      //       `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
      //   );
      //   const borderColor = langData.map((lang) => `${lang.color}`);
      const chartType = "bar";
      const axes = true;
      const legend = false;
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

  const [starChart2Data, setstarChart2Data] = useState(null);
  const initStartChart2 = () => {
    const ctx = document.getElementById("starChart2");
    const filteredRepos = repoData.filter(
      (repo) => !repo.fork && repo.stargazers_count > 0
    );
    const uniqueLangs = new Set(filteredRepos.map((repo) => repo.language));

    // const labels = mostStarredRepos.map((repo) => repo.name);
    // const data = mostStarredRepos.map((repo) => repo[sortProperty]);

    const labels = Array.from(uniqueLangs.values()).filter(
      (unique_lang) => unique_lang
    );
    const data = labels.map((lang) => {
      const repos = filteredRepos.filter((repo) => repo.language === lang);
      const starsArr = repos.map((r) => r.stargazers_count);
      const starSum = starsArr.reduce((a, b) => a + b, 0);
      return starSum;
    });
    setstarChart2Data(data);

    if (data.length > 0) {
      const chartType = "doughnut";
      const borderColor = labels.map((label) => langColors[label]);
      const backgroundColor = borderColor.map((color) => `${color}B3`);
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
    console.log('lang data - ',langData);
    
    if (langData !== null && repoData !== null) {
      initLangChart();
      initStartChart();
      initStartChart2();
    }
  }, []);
  const chartSize = 300;

  if (langData !== null && repoData !== null) {
    return (
      <div>
        <ChartsStyles>
          <div className="chart">
            <div className="lang-chart">
              <h1>Top Languages</h1>
              <canvas id="langChart" width={chartSize} height={chartSize} />
            </div>
            <div className="star-chart">
              <h1>Most Starred Repos</h1>
              <canvas id="starChart" width={chartSize} height={chartSize} />
            </div>
            <div className="star-chart2">
              <h1>Most Starred Per Repo</h1>
              <canvas id="starChart2" width={chartSize} height={chartSize} />
            </div>
          </div>
        </ChartsStyles>
      </div>
    );
  } else {
    return <div>charts</div>;
  }
};

Charts.propTypes = {
  langData: PropTypes.array.isRequired,
  repoData: PropTypes.array.isRequired,
};

export default Charts;

