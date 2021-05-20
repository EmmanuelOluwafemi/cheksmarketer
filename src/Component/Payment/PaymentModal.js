import React, { useState } from "react";
import styled from "styled-components";
import { MenuItem, TextField } from "@material-ui/core";

const PaymentModal = ({ handleWithdraw, banks }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("Abbey Mortgage Bank");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      accountNumber,
      bankName,
    };
    console.log(data);
  };
  return (
    <PaymentStyle>
      <div onClick={handleWithdraw} className="overlay"></div>
      <div className="content">
        <h1>Withdraw</h1>
        <p>Lets Get Your Details 😋</p>

        <form>
          <div className="inputGroup">
            <TextField
              select
              label="Select Banks"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              variant="outlined"
              margin="dense"
              fullWidth
            >
              {banks.length ? (
                banks.map((bank) => (
                  <MenuItem value={bank.name} key={bank.code}>
                    {bank.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="Banks">Loading Banks...</MenuItem>
              )}
            </TextField>
          </div>

          <div className="inputGroup">
            <TextField
              label="Account Number"
              type="number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              variant="outlined"
              margin="dense"
              fullWidth
            />
          </div>

          <div className="buttonContainer">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </PaymentStyle>
  );
};

export default PaymentModal;

const PaymentStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
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
      color: #0175b1;
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
        width: 90%;
        margin: 0 auto;
        margin-bottom: 1.5rem;
      }

      .buttonContainer {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          background: #0175b1;
          padding: 0.7rem 2rem;
          border: none;
          outline: none;
          color: #fff;
          border-radius: 8px;
        }
      }
    }
  }
`;
