import React from "react";
import { Line } from "react-chartjs-2";

import styled from "styled-components";

const Chart = ({newData}) => {

  let {seller_graph, user_graph } = newData;
  let seller_graph_data = [];
  let seller_graph_time = [];
  let user_graph_data = [];

  // Products Datas
  seller_graph && seller_graph.map(item => {
    let {x, y} = item;
    seller_graph_data.push(x);
    seller_graph_time.push(y);
    return x;
  })

  // Number Of Visitors
  user_graph && user_graph.map(item => {
    let {x, y} = item;
    user_graph_data.push(x);

    return y;
  })
  
  const data = {
    labels: seller_graph_time,
    datasets: [
      {
        label: "Added Products",
        data: seller_graph_data,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(88, 252, 125, 1)",
        borderWidth: 2,
      },
      {
        label: "Visited User",
        data: user_graph_data,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(252, 125, 88, 1)",
        borderWidth: 2,
      }
    ],
  };

  return (
    <ChartContainer>
      <Line data={data} />
    </ChartContainer>
  );
};

export default Chart;

const ChartContainer = styled.div`
    width: 60vw;
    cursor: pointer;

    @media (max-width: 959px) {
        display: block;
        margin-bottom: 2rem;
        width: 100%;
      }
`;
