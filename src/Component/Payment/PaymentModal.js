import React, { useEffect } from 'react';
import Styled from 'styled-components';
import axios from 'axios';

const PaymentModal = ({ handleWithdraw }) => {

    useEffect(() => {
        axios.get('https://api.flutterwave.com/v3/banks/NG',{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": 'Bearer FLWSECK_TEST-a08986bc0daee90f7966561bff814d54-X'
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <PaymentStyle>
            <div onClick={handleWithdraw} className="overlay"></div>
            <div className="content">
                <h1>Withdraw</h1>
                <p>Lets Get Your Details 😋</p>

                <form>
                    <div className="inputGroup">
                        <label>Bank Name</label>
                        <input type="text" />
                    </div>

                    <div className="inputGroup">
                        <label>Account Number</label>
                        <input type="text" />
                    </div>

                    <div className="buttonContainer">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </PaymentStyle>
    )
}

export default PaymentModal;

const PaymentStyle = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;

    .overlay {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, .3);
        z-index: 5;
        top: 0;
        left: 0;
    }

    .content {
        position: relative;
        z-index: 8;
        width: 90%;
        max-width: 500px;
        min-height: 300px;
        background: #fff;
        border-radius: 32px;
        padding: 2rem 1.5rem;

        h1 {
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
            color: #0175B1;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            text-align: center;
        }

        form {
            width: 100%;
            margin-top: 2rem;

            .inputGroup {
                width: 80%;
                margin: 0 auto;
                margin-bottom: 1.5rem;
                
                label {
                    display: block;
                    font-size: 1rem;   
                }

                input {
                    width: 100%;
                    height: 32px;
                    outline: none;
                    padding: 0 1rem;
                }
            }

            .buttonContainer {
                display: flex;
                align-items: center;
                justify-content: center;

                button {
                    background: #0175B1;
                    padding: 1rem 2rem;
                    border: none;
                    outline: none;
                    color: #fff;
                    border-radius: 8px;
                }
            }
        }
    }
`;