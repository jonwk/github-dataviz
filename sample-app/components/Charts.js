import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ChartsStyles from "./styles/ChartsStyles";
import { Section } from "../styles";
import { PieChartComp, BarChartComp } from "../components/charts/";
import { ResponsiveContainer } from "recharts";
import { mockRepoData } from "../mock";
import { langColors } from "../util";
// import { error } from "console";
// const Charts = ({ repostarChartData }) => {

// Create Most Starred chart

const Charts = ({repoData}) => {
// const Charts = () => {
  const ChartWidth = 300;
  const ChartHeight = 300;
  //   const [starChartData, setStarChartData] = useState([{}]);
  const [starChartConfig, setStarChartConfig] = useState({});
  //   const [langChartData, setLangChartData] = useState([{}]);
  const [langChartConfig, setLangChartConfig] = useState({});
  const [langStarChartConfig, setLangStarChartConfig] = useState({});

//   const repoData = mockRepoData;
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
    // setStarChartData(data);

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

  const getLangMap = (repoData) => {
    const langMap = new Map();
    for (let index = 0; index < repoData.length; index++) {
      const repo = repoData[index];
      if (repo.language) {
        if (langMap.size != 0) {
          const count = langMap.get(repo.language);
          if (!count) {
            langMap.set(repo.language, 1);
          } else {
            langMap.set(repo.language, count + 1);
          }
        } else {
          langMap.set(repo.language, 1);
        }
      }
    }
    return langMap;
  };

  const mapToArray = (map) => {
    let array = Array.from(map, ([key, value]) => ({ key, value }));
    return array.filter((x) => x !== undefined);
  };

  const addColors = (langArr) => {
    let langDataWithColors = [];

    for (let i = 0; i < langArr.length; i++) {
      const key = langArr[i].key;
      const value = langArr[i].value;
      const color = langColors[langArr[i].key.toLowerCase()];

      langDataWithColors.push({ lang: key, repos: value, color: color });
    }
    return langDataWithColors;
  };

  const getLangData = (repoData) => {
    const convData = mapToArray(getLangMap(repoData));
    const langData = addColors(convData);
    return langData;
  };

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const colorsArr = (langData) => {
    // let colors = Array.from(langData, ({ key, value, color }) => color);
    // colors = colors.map(v => (v === undefined ? getRandomColor() : v));
    // colors = colors.filter(x => x !== undefined);
    // colors = colors.map(color => {
    //   var len = color == null ? 0 : color.length;
    //   if (len > 0) {
    //     return `#${len > 4 ? color.slice(1) : color.slice(1).repeat(2)}FF`;
    //   }
    // });
    return Array.from(langData, ({ key, value, color }) => color)
      .map((v) => (v === undefined ? getRandomColor() : v))
      .filter((x) => x !== undefined)
      .map((color) => {
        var len = color == null ? 0 : color.length;
        if (len > 0) {
          return `#${len > 4 ? color.slice(1) : color.slice(1).repeat(2)}CF`;
        }
      });
  };

  const initLangChart = () => {
    const langData = getLangData(repoData);
    // setLangChartData(langData);
    const labels = langData.map((lang) => lang.label);
    const data = langData;
    const sectorColors = colorsArr(langData);
    // setLangChartData(data);

    if (data.length > 0) {
      const width = ChartWidth;
      const height = ChartHeight;
      const margin = {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      };

      const cx = 150;
      const cy = 150;
      const innerRadius = 70;
      const outerRadius = 120;
      const paddingAngle = 0.5;
      const dataKey = "repos";
      const pieChartConfig = {
        width,
        height,
        margin,
        cx,
        cy,
        innerRadius,
        outerRadius,
        paddingAngle,
        data,
        dataKey,
        sectorColors,
      };
      console.log("langChartConfig - ", pieChartConfig);
      setLangChartConfig(pieChartConfig);
      console.log("langChartConfig - ", pieChartConfig);
    }
  };

  // Create Stars per language chart
  //   const [thirdChartData, setThirdChartData] = useState(null);
  const initLangStarChart = () => {
    // const ctx = document.getElementById("thirdChart");
    const filteredRepos = repoData.filter(
      (repo) => !repo.fork && repo.stargazers_count > 0
    );
    const uniqueLangs = new Set(filteredRepos.map((repo) => repo.language));
    const labels = Array.from(uniqueLangs.values()).filter((l) => l);
    const data = labels.map((lang) => {
      const repos = filteredRepos.filter((repo) => repo.language === lang);
      const starsArr = repos.map((r) => r.stargazers_count);
      const starSum = starsArr.reduce((a, b) => a + b, 0);
      return { lang: lang, repos: starSum };
    });

    // const langData = getLangData(repoData);
    // setLangChartData(langData);
    // const labels = langData.map((lang) => lang.label);
    // const data = langData;
    // const sectorColors = colorsArr(langData);
    // setLangChartData(data);

    // setThirdChartData(data);

    if (data.length > 0) {
      console.log("third chart data:", data);
      const borderColor = labels.map((label) => {
        if (langColors[label.toLowerCase()] !== undefined) {
          return langColors[label.toLowerCase()];
        } else {
          return getRandomColor();
        }
      });
      const sectorColors = borderColor.map((color) => `${color}FF`);
      const width = ChartWidth;
      const height = ChartHeight;
      const margin = {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      };

      const cx = 150;
      const cy = 150;
      const innerRadius = 70;
      const outerRadius = 120;
      const paddingAngle = 0.5;
      const dataKey = "repos";
      const pieChartConfig = {
        width,
        height,
        margin,
        cx,
        cy,
        innerRadius,
        outerRadius,
        paddingAngle,
        data,
        dataKey,
        sectorColors,
      };
      //   console.log("langChartConfig - ", pieChartConfig);
      setLangStarChartConfig(pieChartConfig);
      console.log("langChartConfig - ", pieChartConfig);
      //   console.log(backgroundColor)
      //   const config = {
      //     ctx,
      //     chartType,
      //     labels,
      //     data,
      //     backgroundColor,
      //     borderColor,
      //     axes,
      //     legend,
      //   };
      //   console.log(config);
      //   buildChart(config);
    }
  };

  useEffect(() => {
    if (repoData.length) {
      initStarChart();
      initLangChart();
      initLangStarChart();
      //   console.log(starChartData);
      //   console.log(langChartData);
      //   initThirdChart();
    }
  }, []);

  const errorHandler = (obj) => {
    for (const prop in obj) {
      if (
        obj.hasOwnProperty(prop) &&
        (obj[prop] === undefined || obj[prop] === null)
      ) {
        return true;
      }
    }
    return false;
  };

  const starChartError = errorHandler(starChartConfig);
  const langChartError = errorHandler(langChartConfig);
  const langStarChartError = errorHandler(langStarChartConfig);

  return (
    <Section dark>
      <ChartsStyles>
        <div className="chart">
          <header>
            <h2>Top Languages</h2>
          </header>

          <div className="chart-container">
            {langChartError && <p>Not Enough Data!</p>}
            <PieChartComp config={langChartConfig} />
          </div>
        </div>
        <div className="chart">
          <header>
            <h2>Top Starred Repos</h2>
          </header>

          <div className="chart-container">
            {/* <BarChartComp config={starBarChartConfig} /> */}
            {/* {starBarChartConfig.starChartData && ( */}
            {starChartError && <p>Not Enough Data!</p>}
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
            {/* <PieChartComp /> */}
            {langChartError && <p>Not Enough Data!</p>}
            <PieChartComp config={langStarChartConfig} />

            {/* {langChartError && <p>Nothing to see here!</p>} */}
            {/* <canvas id="langChart" width={chartSize} height={chartSize} /> */}
          </div>
        </div>
      </ChartsStyles>
    </Section>
  );
};

export default Charts;
