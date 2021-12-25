import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ChartsStyles from "./styles/ChartsStyles";
import { Section } from "../styles";
import { PieChartComp, BarChartComp } from "../components/charts/";
import { ResponsiveContainer } from "recharts";
// const Charts = ({ repoData }) => {
const Charts = () => {
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
            <BarChartComp />

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
