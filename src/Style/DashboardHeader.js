import Styled from 'styled-components';

export const DashboardHeader = Styled.div`
    width: 100%;
    padding: 24px 0;
    display: flex;
    align-items: center;

    .icon {
        width: 56px;
        height: 56px;
        background: #ddd;
        border: 2px solid #0175B1;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;

        .icon-fill {
            color: #0175B1;
            font-size: 32px;
        }
    }

    .heading {
        h6 {
            font-size: 1.3rem;
            font-weight: bold;
            color: #0175B1;
            margin-top: 8px;
        }

        p {
            font-size: 0.7rem;
            color: #222;
        }
    }
`;