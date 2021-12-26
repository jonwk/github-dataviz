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

const BarChartComp = ({config }) => {
  const { width, height, margin, data, colors, XKey, YKey, BarTPColor } =
    config;
    console.log(config);
  // const config = props.config;
  // console.log(config);

  // const data = config != null ? config.data : [{}];
  // console.log(config.data);
  // const colors = config.colors;
  // console.log(data);
  // return (
  //   <BarChart
  //     width={config.width}
  //     height={config.height}
  //     data={config.data}
  //     margin={config.margin}
  //   >
  //     <XAxis dataKey={config.XKey} />
  //     <YAxis dataKey={config.YKey} />
  //     <Tooltip cursor={{ fill: "transparent" }} />
  //     <Bar dataKey={config.YKey} fill={config.BarTPColor}>
  //       {data &&
  //         data.map((entry, index) => (
  //           <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
  //         ))}
  //     </Bar>
  //   </BarChart>
  // );
  return (
    <BarChart width={width} height={height} data={data} margin={margin}>
      <XAxis dataKey={XKey} />
      <YAxis dataKey={YKey} />
      <Tooltip cursor={{ fill: "transparent" }} />
      <Bar dataKey={YKey} fill={BarTPColor}>
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
