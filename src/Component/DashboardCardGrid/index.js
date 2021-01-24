import Styled from 'styled-components';

const DashboardCardGrid = ({ children }) => {
    return (
        <GridStyle>
            {children}
        </GridStyle>
    );
}

export default DashboardCardGrid;

const GridStyle = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 31.5% 31.5% 31.5%;
    grid-column-gap: 24px;

    @media (max-width: 583px) {
        grid-template-columns: 100%;
        grid-row-gap: 16px; 
    }
`;