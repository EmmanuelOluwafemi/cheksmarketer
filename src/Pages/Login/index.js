import React, { useState, useEffect } from "react";

import Styled from "styled-components";

import AuthLayout from "../../Layout/AuthLayout";

import { Link, useHistory } from "react-router-dom";
import Axios from "../../lib/Axios";

import { Snackbar } from "@material-ui/core";

import loginBg from "./loginbtn.jpg";

const Login = () => {
  let history = useHistory();

  // States
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [error, setError] = useState([])

  useEffect(() => {
    if (localStorage.getItem("makToken")) {
      history.push("/dashboard");
    }
  }, [history]);

  // handle err
  const handleClick = (mes) => {
    setErrorMessage(mes);
    setShowSnackBar(true);
  };

  const handleClose = () => {
    setShowSnackBar(false);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (emailValue && passwordValue) {
      setSubmitted(true);
      const data = {
        email: emailValue,
        password: passwordValue,
        role: "marketer",
      };
      return Axios.post("/login", data)
        .then((res) => {
          const token = res.data.token;

          // Save Token
          localStorage.setItem("makToken", token);
          setSubmitted(false);

          // redirects the admin to the dashboard
          history.replace("/dashboard");
        })
        .catch((err) => {
          setError(err.response.data.errors);
          setSubmitted(false);
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
          <form onSubmit={loginHandler}>
            <h1>Login</h1>

            <div className="inputGroup">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="Enter Your Email"
              />
              {error.email && <p className="error">{error.email}</p>}
            </div>

            <div className="inputGroup">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              {error.password && <p className="error">{error.password}</p>}
            </div>
            <div className="linkContainer">
              <Link to="/forget_password" className="linked">
                Forgot Password?
              </Link>
            </div>
            <button type="submit">
              {submitted ? (
                <div className="spinner-border text-dark" role="status"></div>
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </InputSection>
        <LoginBgStyle className="col-md-6 d-none d-md-block bg-secondary">
          <div className="contentNew">
            <p></p>
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
          </div>
        </LoginBgStyle>
      </LoginRow>
    </AuthLayout>
  );
};

export default Login;

export const LoginRow = Styled.div`
    width: 100%;
    min-height: 473px;
    margin: 0;
`;

export const LoginBgStyle = Styled.div`
  position: relative;
  background-image: url(${loginBg});
  background-size: contain;
  background-repeat: no-repeat;

  .contentNew {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 40px;

    p {
      font-size: .8rem;
      color: #fff;
      padding-right: 2rem;
      opacity: .8;
      margin-bottom: 24px;
      line-height: 1.4;
    }

    button {
      border: 2px solid #fff;
      background: none;
      color: #fff;
      width: 150px;
      height: 50px;
      font-size: 1rem;
      transition: all ease-in 0.4s;
      &:hover {
        background: #0175b1;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export const InputSection = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        border-right: 10px solid #0175B1;
    }

    form {
        width: 100%;
        padding: 0 24px;

        h1 {
            font-size: 1.6rem;
            font-weight: bold;
        }

        .inputGroup {
            width: 100%;

            label {
                font-size: 1rem;
            }

            input {
                width: 100%;
                height: 40px;
                border: none;
                background: #F8F8F8;
                outline: none;
                padding: 8px 12px;
                font-size: .8rem;
            }

            .error {
              font-size: .8rem;
              color: red;
            }

        }

        .linkContainer {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin: 16px 0;
        
            .linked {
                width: 100%;
                margin: 0 auto;
                font-size: .8rem;
                color: #0175B1;
                font-weight: 500;
                text-align: right;
                font-style: italic;
            }
        }

        button {
            width: 100%;
            height: 40px;
            background: #0175B1;
            border: none;
            cursor: pointer;
            outline: none;
            font-size: 1rem;
            color: #fff;
            text-transform: uppercase;
        }
    }
`;
