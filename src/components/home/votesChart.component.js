import React from 'react';
import { Chart } from 'react-google-charts';

let basic = [['Option', 'Votes']];

const VotesChart = (props) => {
    debugger
  basic = [['Option', 'Votes']];
  (() => props.pollOptions.map(ans => basic.push([ans.option, ans.votes])))();
  return (
    <Chart
      chartType="PieChart"
      data={basic}
      options={{
        pieSliceText: 'label',
        slices: {
          1: { offset: 0.1 },
          2: { offset: 0.1 },
          3: { offset: 0.1 },
          4: { offset: 0.1 },
        },
        is3D: false,
      }}
      graph_id="PieChart"
      width="100%"
      height="400px"
      legend_toggle
    />
  );
};


export default VotesChart;