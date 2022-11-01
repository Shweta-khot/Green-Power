import { Line, Tooltip, Legend } from "recharts";

import CustomLineChart from "../Common/Chart/LineChart/CustomLineChart";

import { NumericDataFormater } from "../../utils";

const HistoricalData = ({chartData}) => {
  return (
    <CustomLineChart
      data={chartData}
      height={350}
      xDataKey="time"
      xAngle={60}
      yTickFormatter={NumericDataFormater}
    >
      <Tooltip />
      <Legend
        verticalAlign="bottom"
        wrapperStyle={{ position: "relative" }}
      />
      {[
        { dataKey: "rating", stroke: "#00B047" },
      ].map((line) => {
        return (
          <Line
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.stroke}
          ></Line>
        );
      })}
    </CustomLineChart>
  );
};

export default HistoricalData;
