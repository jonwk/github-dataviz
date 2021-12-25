import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Tooltip, Cell } from "recharts";

const data = [
  { lang: "Java", repos: 5 },
  { lang: "VHDL", repos: 1 },
  { lang: "JavaScript", repos: 4 },
  { lang: "SCSS", repos: 1 },
  { lang: "Jupyter Notebook", repos: 1 },
  { lang: "Python", repos: 4 },
  { lang: "CSS", repos: 1 },
  { lang: "Dart", repos: 1 },
  { lang: "Verilog", repos: 1 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    repos,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.lang}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
      >{`${repos + " " + (repos > 1 ? "Repos" : "Repo")}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#e1109a"];
// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#e1109a"];
// const colors = [
//   "rgba(255, 99, 132, 1)",
//   "rgba(54, 162, 235, 1)",
//   "rgba(255, 206, 86, 1)",
//   "rgba(153, 102, 255, 1)",
//   "rgba(75, 192, 192, 1)",
//   "rgba(255, 159, 64, 1)",
// ];
const colors = [
  "#b07219B3",
  "#adb2cbB3",
  "#f1e05aB3",
  "#c6538cB3",
  "#00C49F",
  "#3572A5B3",
  "#563d7cB3",
  "#00B4ABB3",
  "#b2b7f8B3",
];

export default function PieChartComp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <PieChart
      width={300}
      height={300}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 10,
      }}
      overflow="visible"
    >
      {/* <Tooltip /> */}
      <Pie
        stroke="none"
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={150}
        cy={150}
        innerRadius={70}
        outerRadius={120}
        fill="transparent"
        paddingAngle={0.5}
        dataKey="repos"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

// backgroundColor: Array(9)

// length: 9
// [[Prototype]]: Array(0)
// borderColor: Array(9)
// 0: "#b07219"
// 1: "#adb2cb"
// 2: "#f1e05a"
// 3: "#c6538c"
// 4: "undefined"
// 5: "#3572A5"
// 6: "#563d7c"
// 7: "#00B4AB"
// 8: "#b2b7f8"
// length: 9
// [[Prototype]]: Array(0)
// chartType: "pie"
// ctx: canvas#langChart.chartjs-render-monitor
// data: Array(9)
