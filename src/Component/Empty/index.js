import React from 'react';
import Styled from 'styled-components';
import EmptyIcon from './empty.svg';

const Empty = () => {
    return (
        <EmptyStyle>
            <img src={EmptyIcon} alt="empty" />
            <h3>No Subscriber added yet</h3>
            <button>Add Subscriber</button>
        </EmptyStyle>
    )
}

export default Empty;

const EmptyStyle = Styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 30%;
        height: auto;

        @media (max-width: 768px) {
            width: 80%;
        }
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
        color: #e3e3e3;
    }

    button {
        border: none;
        background: #0175B1;
        margin-top: 1.5rem;
        padding: .8rem 1.5rem;
        color: #fff;
    }
`;