import React from 'react';

import Styled from 'styled-components';

const AuthLayout = (props) => {
    return (
    <AuthLayoutStyle>
        <div className="content">
            {props.children}
        </div>
    </AuthLayoutStyle>
    )
}

export default AuthLayout;

const AuthLayoutStyle = Styled.h1`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 400px;
        height: 250px;
        background: #0175B1;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 400px;
        height: 250px;
        background: #0175B1;
    }

    @media (max-width: 768px) {
        &::after {
            width: 100px;
        }

        &::before {
            width: 100px;
        }
    }

    .content {
        position: relative;
        z-index: 6;
        width: 100%;
        max-width: 700px;
        min-height: 400px;
        background: #fff;
        box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 
        0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 
        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 
        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 
        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);

        @media (max-width: 768px) {
            margin: 0 24px;
        }
    }
`;