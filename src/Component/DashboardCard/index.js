import React from 'react';
import Styled from 'styled-components';

export const GreenCard = () => {
    return (
        <CardStyle className="green">
            <h5>Adverts Posted</h5>
            <h3>3320</h3>
        </CardStyle>
    )
}

export const PurpleCard = () => {
    return (
        <CardStyle className="purple">
            <h5>Buyer Viewed</h5>
            <h3>54033</h3>
        </CardStyle>
    )
}

export const RedCard = () => {
    return (
        <CardStyle className="red">
            <h5>Adverts Verified</h5>
            <h3>18433</h3>
        </CardStyle>
    )
}

const CardStyle = Styled.div`
    width: 100%;
    height: 146px;
    padding: 22px 33px;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.green {
        background: #88C660;
    }

    &.purple {
        background: #3D1157;
    }

    &.red {
        background: #D43E1D;
    }
    
    h5 {
        color: #fff;
        font-weight: 700;
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    h3 {
        color: #fff;
        font-weight: 700;
        font-size: 2.5rem;
        text-transform: uppercase;
        text-align: right;
        width: 100%;
        margin: 0;
    }

    @media (max-width: 1200px) {
        h5 {
            font-size: 1.3rem;
        }

        h3 {
            font-size: 2.1rem;
        }
    }

    @media (max-width: 900px) {
        padding: 22px 16px;
        height: 124px;

        h5 {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 583px) {
        padding: 22px 16px;
        height: 90px;

        h3 {
            font-size: 1.6rem;
        }

        h5 {
            font-size: .8rem;
        }
    }
`;