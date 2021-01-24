import React from "react";

import Styled from "styled-components";

import AuthLayout from "../../Layout/AuthLayout";

import { Link, useHistory } from "react-router-dom";

import loginBg from "./loginbtn.jpg";

const Login = () => {
  let history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();
    history.replace("/dashboard");
  };

  return (
    <AuthLayout>
      <LoginRow className="row">
        <InputSection className="col-md-6 bg-white">
          <form onSubmit={loginHandler}>
            <h1>Login</h1>

            <div className="inputGroup">
              <label htmlFor="">Username</label>
              <input type="text" placeholder="Enter Your Username" />
            </div>

            <div className="inputGroup">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter Your Password" />
            </div>
            <div className="linkContainer">
              <Link className="linked">Forgot Password?</Link>
            </div>
            <button type="submit">Log In</button>
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
          </div>
        </LoginBgStyle>
      </LoginRow>
    </AuthLayout>
  );
};

export default Login;

const LoginRow = Styled.div`
    width: 100%;
    min-height: 473px;
    margin: 0;
`;

const LoginBgStyle = Styled.div`
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
  }
`;

const InputSection = Styled.div`
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
