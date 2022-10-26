import { LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { NoDataAvailable } from "../../NoDataAvailable";

const CustomLineChart = (props) => {
  return (
    <ResponsiveContainer width="100%" height={props.height}>
      {props.data.length !== 0 ?<LineChart
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey={props.xDataKey}
          strokeDasharray={3}
          angle={props.xAngle}
          textAnchor="start"
          tick={false}
        />
        <YAxis strokeDasharray={3} />
        {props.children}
      </LineChart>
      :
      <NoDataAvailable/>
      }
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
