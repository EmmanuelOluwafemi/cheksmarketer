import React from 'react';
import Styled from 'styled-components';

const LoginModal = ({ func, title, content }) => {
    return (
        <ModalStyled onClick={func}>
            <div className="content">
                <h4>
                    {title}
                </h4>
                <p>
                    {content}
                </p>
            </div>
        </ModalStyled>
    )
}

export default LoginModal;

const ModalStyled = Styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;

    .content {
        width: 500px;
        min-height: 400px;
        padding: 3rem 2rem;
        background: #0175B1;
        border-top: 8px solid orange;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h4 {
            text-align: center;
            font-size: 2rem;
            color: #fff;
            font-weight: 700;
        }

        p {
            font-weight: 400;
            font-size: 1rem;
            text-align: center;
            color: #fff;
            margin-top: 1rem;
        }
    }
`;