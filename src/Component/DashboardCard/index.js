import React from 'react';
import Styled from 'styled-components';

export const GreenCard = ({user}) => {
    return (
        <CardStyle className="green">
            <h5>Total User</h5>
            <h3>{user}</h3>
        </CardStyle>
    )
}

export const PurpleCard = ({seller}) => {
    return (
        <CardStyle className="purple">
            <h5>Total Subscriber</h5>
            <h3>{seller}</h3>
        </CardStyle>
    )
}

export const RedCard = ({rate}) => {
    return (
        <CardStyle className="red">
            <h5>Conversion Rate</h5>
            <h3>{rate}</h3>
        </CardStyle>
    )
}

export const Activities = ({data}) => {
    // data.map(item => {
    //   console.log(item)
    // })
      console.log(data)
  return (
    <ActivitiesCard>
      <h5>Notifications</h5>
      <hr />
      <div>
        <p>hi</p>
        <h6>From: </h6>
      </div>
    </ActivitiesCard>
  );
};

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

const ActivitiesCard = Styled.div`
    width: 37%;
    margin-left: 2rem;
    background: #fff;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));
    padding: 1rem;
    
    @media (max-width: 959px) {
        width: 100%;
        margin-left: 0;
    }

    * {
        margin: 0;
        padding: 0;
    }

    h5 {
        margin: 1rem 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0.9rem;
        box-sizing: border-box;
        cursor: pointer;

        &:hover{
            background: #e3e3e3;
        }
    }

`;