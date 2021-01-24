import React from 'react';

import AdminDashboardLayout from '../Layout/AdminDashboardLayout';

import Alert from '../Component/Alert';
import { GreenCard, PurpleCard, RedCard } from '../Component/DashboardCard';
// import Chart from '../../../Components/Chart';
import DashboardCardGrid from '../Component/DashboardCardGrid';

import Styled from 'styled-components';

const AdminDashboard = () => {
    return (
        <AdminDashboardLayout>
            <Alert message="Note: your Account will be deactivated after 24hours of registration without payment." />
            <DashboardCardGrid>
                <GreenCard />
                <PurpleCard />
                <RedCard />
            </DashboardCardGrid>
            <ChartGrid>
                {/* {/* <Chart />    */}
                {/* <Chart /> */}
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

