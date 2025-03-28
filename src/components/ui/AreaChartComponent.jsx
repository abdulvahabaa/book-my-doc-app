import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-xs text-gray-700">
        <p className="font-semibold text-gray-900">{payload[0].payload.name}</p>
        {payload.map((entry, index) => (
          <p key={index} className="mt-1">
            <span
              className="inline-block w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.dataKey}: <span className="font-medium">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const AreaChartComponent = ({ data, dataKeys, colors }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid stroke="#ddd" strokeDasharray="0" vertical={false} />
        <XAxis
          dataKey="name"
          stroke="#555"
          tick={{
            fontSize: 10,
            fontWeight: "bold",
            fill: "#555",
            // stroke: "none",
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        {dataKeys.map((key, index) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index]}
            strokeWidth={1.5}
            fill={`url(#color${key})`}
          />
        ))}

        <defs>
          {dataKeys.map((key, index) => (
            <linearGradient
              key={key}
              id={`color${key}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="10%" stopColor={colors[index]} stopOpacity={0.9} />
              <stop offset="95%" stopColor={colors[index]} stopOpacity={0.3} />
            </linearGradient>
          ))}
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
