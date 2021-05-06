import React, {useEffect, useState} from 'react';

import AdminDashboardLayout from '../Layout/AdminDashboardLayout';

import { Activities,  GreenCard, PurpleCard, RedCard } from '../Component/DashboardCard';
import Chart from '../Component/Chart';
import DashboardCardGrid from '../Component/DashboardCardGrid';

import Styled from 'styled-components';

import AxiosAuth from "../lib/AxiosAuth";

const AdminDashboard = () => {
    
    const [data, setData] = useState([]);
    const [graph, setGraph] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        // Get Analytics Statistics
        AxiosAuth()
        .get("/marketer/analytics-stats")
        .then((res) => {
            setData(res.data.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false)
        });

        // Get Analytics Graph
        AxiosAuth()
        .get("/marketer/analytics-graph")
        .then((res) => {
            setGraph(res.data.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false)
        });
    }, [])
    return (
        <AdminDashboardLayout>
            <DashboardCardGrid>
                <GreenCard user={data.total_users} />
                <PurpleCard seller={data.total_sellers_registers} />
                <RedCard rate={data.conversion_rate} />
            </DashboardCardGrid>
            <ChartGrid>
                <Chart newData={graph} />
                <Activities />
            </ChartGrid>
        </AdminDashboardLayout>
    )
}

export default AdminDashboard;

const ChartGrid = Styled.div`
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 16px; 
`;

