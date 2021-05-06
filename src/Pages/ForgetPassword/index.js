import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";

import { InputSection, LoginBgStyle, LoginRow } from "../Login";
import AuthLayout from "../../Layout/AuthLayout";
import Axios from "../../lib/Axios";

const ForgetPassword = (props) => {
  // States
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);

  // handle err
  const handleClick = (mes) => {
    setErrorMessage(mes);
    setShowSnackBar(true);
  };

  const handleClose = () => {
    setShowSnackBar(false);
  };

  // Form Handler
  const onSubmit = (e) => {
    e.preventDefault();
    if (emailValue) {
      setSubmitted(true);
      const data = {
        email: emailValue,
      };
      return Axios.post("/password/email", data)
        .then((res) => {
          const token = res.data.message;
          setSuccessMessage(token);
          setSubmitted(false);
          setResult(true);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setSubmitted(false);
          handleClick("No account found with this email");
        });
    } else {
      handleClick("Email is required");
    }
  };

  const openMail = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={showSnackBar}
        onClose={handleClose}
        message={errorMessage}
        key={"top center"}
      />
      <LoginRow className="row">
        <InputSection className="col-md-6 bg-white">
          {!result ? (
            <form onSubmit={onSubmit}>
              <h1>Forget Password?</h1>
              <div className="inputGroup" style={{ marginTop: "2.5rem" }}>
                <label htmlFor="">
                  Please enter the email address connected to your account
                </label>
                <input
                  type="email"
                  name="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="Email Address"
                  style={{ marginTop: "0.5rem" }}
                />
              </div>
              <button type="submit" style={{ marginTop: "3rem" }}>
                {submitted ? (
                  <div className="spinner-border text-dark" role="status"></div>
                ) : (
                  "Reset"
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={openMail}>
              <div>
                <img
                  src="https://www.sentandsecure.com/wp-content/uploads/email-logo-e1548269994155.jpg"
                  alt="Success"
                  style={{ width: "200px", display: "block", margin: "auto" }}
                />
                <p
                  style={{
                    width: "80%",
                    display: "block",
                    margin: "auto",
                    textAlign: "center",
                  }}
                >
                  {successMessage} Kindly check your mail.
                </p>
                {/* <button type="submit" style={{ marginTop: "3rem" }}>
                  <a
                    style={{
                      color: "inherit",
                      "&:hover": {
                        textDecoration: "none",
                      },
                    }}
                    href="mailto:"
                  >
                    Open Mail
                  </a>
                </button> */}
              </div>
            </form>
          )}
        </InputSection>
        <LoginBgStyle className="col-md-6 d-none d-md-block bg-secondary">
          <div className="contentNew">
            <p>
              Libero, porta accumsan, pulvinar ullamcorper. Sit amet maecenas
              tellus diam nisi faucibus. Facilisi lorem egestas magna vulputate
              natoque morbi. At tempus volutpat ultrices morbi nisl, semper
              sodales convallis dolor. Est morbi urna tellus..
            </p>
          </div>
        </LoginBgStyle>
      </LoginRow>
    </AuthLayout>
  );
};

export default ForgetPassword;
