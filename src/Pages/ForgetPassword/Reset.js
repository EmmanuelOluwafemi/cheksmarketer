import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Snackbar } from "@material-ui/core";

import AuthLayout from "../../Layout/AuthLayout";
import Axios from "../../lib/Axios";
import { InputSection, LoginBgStyle, LoginRow } from "../Login";

const ForgetPassword = (props) => {
  let history = useHistory();

  let {email, token} = useParams()

  // States
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmsValue, setConfirmsValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [errors, setError] = useState([])

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
    if (confirmsValue && passwordValue) {
      setSubmitted(true);
      const data = {
        email: email,
        token: token,
        password_confirmation: confirmsValue,
        password: passwordValue,
      };
      return Axios.post("/password/reset", data)
        .then((res) => {
          const token = res.data.token;

          localStorage.setItem("makToken", token);
          setSubmitted(false);

          // redirects the user to the dashboard
          history.replace("/user");
        })
        .catch((err) => {
          setSubmitted(false);
          // handleClick(err.response.data.message);
          setError(err.response.data.errors)
        });
    } else {
      handleClick("All fields are required");
    }
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
          <form onSubmit={onSubmit}>
            <h1>Reset Password</h1>
            <div className="inputGroup" style={{ marginTop: "1rem" }}>
              <label htmlFor="">New Password</label>
              <input
                type="password"
                name="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="New Password"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="inputGroup" style={{ marginTop: "1rem" }}>
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                value={confirmsValue}
                onChange={(e) => setConfirmsValue(e.target.value)}
                placeholder="Confirm Password"
              />
              {errors.password_confirmation && <p className="error">{errors.password_confirmation}</p>}
            </div>
            <button type="submit" style={{ marginTop: "2rem" }}>
              {submitted ? (
                <div className="spinner-border text-dark" role="status"></div>
              ) : (
                "Reset"
              )}
            </button>
          </form>
        </InputSection>
        <LoginBgStyle className="col-md-6 d-none d-md-block bg-secondary">
          <div className="contentNew">
            <p>
              Libero, porta accumsan, pulvinar ullamcorper. Sit amet maecenas
              tellus diam nisi faucibus. Facilisi lorem egestas magna vulputate
              natoque morbi. At tempus volutpat ultrices morbi nisl, semper
              sodales convallis dolor. Est morbi urna tellus..
            </p>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </LoginBgStyle>
      </LoginRow>
    </AuthLayout>
  );
};

export default ForgetPassword;
