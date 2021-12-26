import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ChartsStyles from "./styles/ChartsStyles";
import { Section } from "../styles";
import { PieChartComp, BarChartComp } from "../components/charts/";
import { ResponsiveContainer } from "recharts";
import { mockRepoData } from "../mock";
// const Charts = ({ repostarChartData }) => {
const ChartWidth = 300;
const ChartHeight = 300;

// Create Most Starred chart

// const Charts = ({repoData}) => {
const Charts = () => {
  const [starChartData, setStarChartData] = useState([{}]);
  const [starChartConfig, setStarChartConfig] = useState(null);

  const repoData = mockRepoData;
  const initStarChart = () => {
    const LIMIT = 5;
    const sortProperty = "stargazers_count";
    const mostStarredRepos = repoData
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);
    const labels = mostStarredRepos.map((repo) => repo.name);
    const stars = mostStarredRepos.map((repo) => repo[sortProperty]);
    const data = [];
    for (let i = 0; i < stars.length; i++) {
      data.push({ name: labels[i], stars: stars[i] });
    }

    console.log(data);
    setStarChartData(data);

    if (data.length > 0) {
      const width = ChartWidth;
      const height = ChartHeight;
      const margin = {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      };
      const XKey = "name";
      const YKey = "stars";
      const BarTPColor = "#00C49F";
      const colors = ["#e1109a", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
      //
      const starBarChartConfig = {
        width,
        height,
        margin,
        data,
        colors,
        XKey,
        YKey,
        BarTPColor,
      };
      console.log(starBarChartConfig);
      setStarChartConfig(starBarChartConfig);
      console.log(starBarChartConfig);
    //   console.log(starBarChartConfig);
    }
  };

  useEffect(() => {
    if (repoData.length) {
      //   initLangChart();
      initStarChart();
      console.log(starChartData);
      //   initThirdChart();
    }
  }, []);

  return (
    <Section dark>
      <ChartsStyles>
        <div className="chart">
          <header>
            <h2>Top Languages</h2>
          </header>

          <div className="chart-container">
            <PieChartComp />
          </div>
        </div>
        <div className="chart">
          <header>
            <h2>Top Starred Repos</h2>
          </header>

          <div className="chart-container">
            {/* <BarChartComp config={starBarChartConfig} /> */}
            {/* {starBarChartConfig.starChartData && ( */}
            <BarChartComp config={starChartConfig} />
            {/* )} */}

            {/* {langChartError && <p>Nothing to see here!</p>} */}
            {/* <canvas id="langChart" width={chartSize} height={chartSize} /> */}
          </div>
        </div>
        <div className="chart">
          <header>
            <h2>Starred Languages</h2>
          </header>

          <div className="chart-container">
            <PieChartComp />

            {/* {langChartError && <p>Nothing to see here!</p>} */}
            {/* <canvas id="langChart" width={chartSize} height={chartSize} /> */}
          </div>
        </div>
      </ChartsStyles>
    </Section>
  );
};

export default Charts;
