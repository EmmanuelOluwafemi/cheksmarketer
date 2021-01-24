import React, { useState } from 'react';
import Styled from 'styled-components';

// icons
import { AiFillCloseCircle } from 'react-icons/ai';

const Alert = ({ message }) => {

    const [closeAlert, setAlertStatus] = useState(false);

    const handleOnclick = () => {
        setAlertStatus(true);
    }

    return (
        <AlertStyle className={!closeAlert ? 'show' : ''}>
            <p>{message}</p>
            <AiFillCloseCircle onClick={handleOnclick} className="icons" />
        </AlertStyle>
    )
}

export default Alert;

const AlertStyle = Styled.div`
    position:relative;
    width: 100%;
    min-height: 60px;
    background: rgba(251, 211, 72, 0.1);
    font-size: 1rem;
    color: #000;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    display: none;
    margin-bottom: 1.5rem;

    &.show {
        display: flex;
    }

    p {
        padding: 0;
        margin: 0;
        max-width: 90%;
    }

    .icons {
        color: red;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 32px;

        @media (max-width: 768px) {
            position: absolute;
            top: 50%;
            right: 16px;
            transform: translateY(-50%);
            font-size: 1.2rem;
        }
    }

    @media (max-width: 768px) {
        font-size: .8rem;
        line-height: 16px;
    }
`;