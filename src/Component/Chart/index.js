import React from 'react';
import {Line } from 'react-chartjs-2';

import Styled from 'styled-components';

const Chart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June'],
        datasets: [{
            label: 'Number of Ads Viewed',
            data: [38, 30, 20, 42, 12, 29]
        }]
    }

    return (
        <ChartContainer>
            <Line data={data} />
        </ChartContainer>
    )
}

export default Chart;

const ChartContainer = Styled.div`
    width: 80vw;
    height: 400px;
`;