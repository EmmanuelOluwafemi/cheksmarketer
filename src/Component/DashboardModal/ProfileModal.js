import React from 'react'

import Styled from 'styled-components'

const ProfileModal = ({ handleWithdraw }) => {
    return (
        <StyledPaymentModal onClick={handleWithdraw}>
            <div className="content">
                <h1>😥</h1>
                <h1>Withdraw not available</h1>
                <p>you need to register up to 10 Subscribers to be able to withdraw.</p>
            </div>
        </StyledPaymentModal>
    )
}

export default ProfileModal

const StyledPaymentModal = Styled.section`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 5;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        position: relative;
        z-index: 8;
        width: 90%;
        max-width: 500px;
        min-height: 300px;
        background: #fff;
        border-radius: 32px;
        padding: 2rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        color: #0175b1;
        }

        p {
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
        }
    }
`