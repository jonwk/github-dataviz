import React, { useState } from "react";
import PropTypes from "prop-types";
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

const BarChartComp = ({ config }) => {
  const { width, height, margin, data, colors, XKey, YKey, BarTPColor } =
    config;
  return (
    <BarChart width={width} height={height} data={data} margin={margin}>
      <XAxis dataKey={XKey} fill="none" />
      <YAxis dataKey={YKey} />
      <Tooltip cursor={{ fill: "transparent" }} />
      <Bar dataKey={YKey}>
        {data &&
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
      </Bar>
    </BarChart>
  );
};

BarChartComp.propTypes = {
  config: PropTypes.object.isRequired,
};

export default BarChartComp;
