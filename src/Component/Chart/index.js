import React from "react";
import { Line } from "react-chartjs-2";

import Styled from "styled-components";

const Chart = ({newData}) => {
  let seller_graph_data = [];
  let seller_graph_time = [];
  let user_graph_data = [];

  function checkMonth(num) {
    let day = '';
    switch (num) {
      case 1:
        day = "Jan";
        break;
      case 2:
         day = "Feb";
        break;
      case 3:
        day = "Mar";
        break;
      case 4:
        day = "Apr";
        break;
      case 5:
        day = "May";
        break;
      case 6:
        day = "Jun";
        break;
      case 7:
        day = "Jul";
        break;
      case 8:
        day = "Aug";
        break;
      case 9:
        day = "Sep";
        break;
      case 10:
        day = "Oct";
        break;
      case 11:
        day = "Nov";
        break;
      case 12:
        day = "Dec";
        break;
      default:
        day = ""
    }

    return day;
  }

  // Products Datas
  newData.seller_graph && newData.seller_graph.map(item => {
    let {x, y} = item;
    seller_graph_data.push(y);
    seller_graph_time.push(x);
    return x;
  })

  // Number Of Visitors
  newData.users_graph && newData.users_graph.map(item => {
    let {x, y} = item;
    user_graph_data.push(y);
    seller_graph_time.push(x);
    return y;
  })

  let sortedLabel = seller_graph_time.sort((a, b) => a - b)

  let labedArray = [];

  sortedLabel.forEach(item => {
    labedArray.push(checkMonth(item))
  })

  let uniqueLabel = [...new Set(labedArray)]
  
  const data = {
    labels: uniqueLabel,
    datasets: [
      {
        label: "Seller Graph",
        data: seller_graph_data,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#3D1157",
        borderColor: "#3D1157",
        borderWidth: 2,
      },
      {
        label: "User Graph",
        data: user_graph_data,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#88C660",
        borderColor: "#88C660",
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

const ChartContainer = Styled.div`
    width: 50vw;
    cursor: pointer;

    @media (max-width: 959px) {
        display: block;
        margin-bottom: 2rem;
        width: 100%;
      }
`;
