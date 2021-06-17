import React from 'react';
import Styled from 'styled-components';

import { Link } from 'react-router-dom';

const Mising = () => {
    return (
        <StyledMissing>
            <div className="content">
                <h1>404</h1>
                <p>Seems something is wrong, try again</p>
                <Link to="/">Go Back Home</Link>
            </div>
        </StyledMissing>
    )
}

export default Mising;

const StyledMissing = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        h1 {
            font-size: 9rem;
            font-weight: 900;
            text-align: center;
            color: #0175B1;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #000;

        }

        a {
            text-align: center;
            font-weight: 600;
            font-size: 1.4rem;
            color: #000;
            margin: 0 auto;
        }
    }
`;