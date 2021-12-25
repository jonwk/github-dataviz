import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#0088FE"];
const colors = ["#e1109a", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const colors = [
//   "rgba(255, 99, 132, 1)",
//   "rgba(54, 162, 235, 1)",
//   "rgba(255, 206, 86, 1)",
//   "rgba(75, 192, 192, 1)",
//   "rgba(153, 102, 255, 1)",
//   "rgba(255, 159, 64, 1)",
// ];
const data = [
  {
    name: "ADS-MOCK-TRIAL",
    stars: 4,
  },
  {
    name: "CSU22012-DSA-Group-Project",
    stars: 4,
  },
  {
    name: "Easy-Bank-Landing-Page",
    stars: 2,
  },
  {
    name: "JohnWesleyK",
    stars: 1,
  },
  {
    name: "College",
    stars: 0,
  },
];

export default function BarChartComp(config) {
  // const {width,height,margin,data,colors,Xs,Ys}=config;
  return (
    <BarChart
      width={300}
      height={300}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis dataKey="stars" />
      <Tooltip cursor={{ fill: "transparent" }} />
      {/* <Legend /> */}
      {/* <Bar dataKey="uv" fill="#f0f"> */}
      <Bar dataKey="stars" fill="#00C49F">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );
}

// BACKGORUNDCOLORSS
// 0: "rgba(255, 99, 132, 0.7)"
// 1: "rgba(54, 162, 235, 0.7)"
// 2: "rgba(255, 206, 86, 0.7)"
// 3: "rgba(75, 192, 192, 0.7)"
// 4: "rgba(153, 102, 255, 0.7)"
// 5: "rgba(255, 159, 64, 0.7)"
// BORDERCOLOR
// [
//   "rgba(255, 99, 132, 1)",
//   "rgba(54, 162, 235, 1)",
//   "rgba(255, 206, 86, 1)",
//   "rgba(75, 192, 192, 1)",
//   "rgba(153, 102, 255, 1)",
//   "rgba(255, 159, 64, 1)"
// ]
// YVALS
// [4, 4, 2, 1, 0]
// LABELS
