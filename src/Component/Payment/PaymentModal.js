import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MenuItem, Snackbar, TextField } from "@material-ui/core";
import axios from "axios";
import AxiosAuth from "../../lib/AxiosAuth";

const PaymentModal = ({ handleWithdraw, banks }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("Abbey Mortgage Bank");
  const [accountName, setAccountName] = useState("");
  const [checkError, setCheckError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [proceed, SetProceed] = useState(false);
  const [submitted, SetSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setCheckError(false);
  };
  const [bankCode, setBankCode] = useState("801");
  const payStackToken = process.env.REACT_APP_PAYSTACK_SK_KEY;

  useEffect(() => {
    banks.length &&
      banks.map((bank) => bank.name === bankName && setBankCode(bank.code));
  }, [bankName, banks]);

  const handleVerify = (e) => {
    e.preventDefault();
    if (accountNumber) {
      if (accountNumber.length > 10) {
        setErrorText("Account Number should not be more than 10");
        setCheckError(true);
      } else if (accountNumber.length < 10) {
        setErrorText("Account Number should not be less than 10");
        setCheckError(true);
      } else {
        setLoading(true);
        axios
          .get(
            `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
            {
              headers: {
                Authorization: "Bearer " + payStackToken, //the payStackToken is a variable which holds the payStackToken
              },
            }
          )
          .then((res) => {
            // console.log(res.data.data.account_name);
            setAccountName(res.data.data.account_name);
            SetProceed(true);
            setCheckError(false);
            setLoading(false);
          })
          .catch((err) => {
            // console.log(err.response.data.message);
            setErrorText("Account Number not found for Selected Bank");
            setCheckError(true);
            setLoading(false);
          });
      }
    } else {
      setCheckError(true);
      setErrorText("All Fields are required");
    }
  };

  const handleSubmit = (e) => {
    SetSubmitted(true);
    e.preventDefault();
    const data = {
      account_number: accountNumber,
      account_bank: bankCode,
      beneficiary_name: accountName,
    };
    console.log(data);
    AxiosAuth()
      .post("/marketer/payout", data)
      .then((res) => {
        SetSubmitted(false);
        // console.log(res);
        setErrorText("Hurray! Your cash is on its way");
        setCheckError(true);
      })
      .catch((err) => {
        SetSubmitted(false);
        console.log(err);
        setErrorText("Ops That didn't work please try again!");
        setCheckError(true);
      });
  };

  return (
    <PaymentStyle>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        autoHideDuration={5000}
        open={checkError}
        onClose={handleClose}
        message={errorText}
        key={"top center"}
      />
      <div onClick={handleWithdraw} className="overlay"></div>
      <div className="content">
        <h1>Withdraw</h1>
        <p>
          {!proceed
            ? "Lets Get Your Details 😋"
            : "Kindly Verify this account is yours"}
        </p>
        {!proceed ? (
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
              <button type="submit" onClick={handleVerify}>
                {loading ? (
                  <div className="spinner-border text-dark" role="status"></div>
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
        ) : (
          <form>
            <p>Funds will be transferred to this account</p>
            <p>
              <strong>Account Name</strong> {accountName}
            </p>
            <p>
              <strong>Account Number</strong> {accountNumber}
            </p>
            <p>
              <strong>Bank </strong> {bankName.split("_").join(" ")}
            </p>
            <div className="buttonContainer">
              <button type="submit" onClick={handleSubmit}>
                {submitted ? (
                  <div className="spinner-border text-dark" role="status"></div>
                ) : (
                  "Yes Please"
                )}
              </button>
            </div>
          </form>
        )}
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
