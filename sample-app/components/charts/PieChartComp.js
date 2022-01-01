import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Tooltip,
  Cell,
} from "recharts";

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
    label,
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
      >{`${repos + " " + (repos > 1 ? `${label}s` : `${label}`)}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
  );
};

const PieChartComp = ({ config }) => {
  const {
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
    label,
  } = config;

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <ResponsiveContainer width="50%" height={height}>
      <PieChart
        width={width}
        height={height}
        margin={margin}
        overflow="visible"
      >
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={paddingAngle}
          dataKey={dataKey}
          onMouseEnter={onPieEnter}
          stroke="none"
          fill="transparent"
        >
          {data &&
            data.map((entry, index) => (
              <Cell
                label={label}
                key={`cell-${index}`}
                fill={sectorColors[index % sectorColors.length]}
              />
            ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

PieChartComp.propTypes = {
  config: PropTypes.object.isRequired,
};

export default PieChartComp;
