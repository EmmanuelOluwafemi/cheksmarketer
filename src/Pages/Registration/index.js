import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Axios from "../../lib/Axios";

import {Loader} from "../../Component/loader/Loader";
import {
  InitialSlide,
  FirstSlide,
  SecondSlide,
  ThirdSlide,
  FourthSlide,
} from "./Slides";
import AuthLayout from "../../Layout/AuthLayout";
import regImage from "./regImage.jpg";

const Register = () => {

  const history = useHistory();

  // Setting up App States
  const [loading, setLoading] = useState(false);
  const [activeSlide, setActiveClass] = useState("initial");
  const [btnText, setBtnText] = useState("Continue");
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  // const [checkPassword, setCheckPassword] = useState(false);

  // State Handlers
  const handleClick = (mes) => {
    setMessage(mes);
    setShowSnackBar(true);
  };

  const handleClose = () => {
    setShowSnackBar(false);
  };

  const setInitial = () => {
    setActiveClass("initial");
  };

  const setFirst = () => {
    setActiveClass("first");
  };

  const setSecond = () => {
    setActiveClass("second");
  };
  const setThird = () => {
    setActiveClass("third");
  };
  const setFourth = () => {
    setActiveClass("fourth");
  };

  //  Slides Controller

  const slidesHandler = () => {
    switch (activeSlide) {
      case "initial":
        return <InitialSlide emailBtn={setFirst} />;
      case "first":
        return <FirstSlide handleClick={handleClick} />;
      case "second":
        return <SecondSlide handleClick={handleClick} />;
      case "third":
        return <ThirdSlide handleClick={handleClick} />;
      case "fourth":
        return (
          <FourthSlide
            handleClick={handleClick}
            // setCheckPassword={setCheckPassword}
          />
        );
      default:
        return <FirstSlide />;
    }
  };

  const nextSlideHandler = () => {
    switch (activeSlide) {
      case "setInitial":
        return setFirst();

      case "first":
        const firstData = JSON.parse(localStorage.getItem("regData"))[0];
        if (firstData && firstData.name !== "") {
          setSecond();
        } else {
          handleClick("Please fill out all fields");
        }
        break;

      case "second":
        const secondData = JSON.parse(localStorage.getItem("regData"))[0];
        if (
          secondData.email &&
          secondData.telephone !== "+234" &&
          secondData.email !== ""
        ) {
          setThird();
        } else {
          handleClick("Please fill out all fields");
        }
        break;
      case "third":
        const thirdData = JSON.parse(localStorage.getItem("regData"))[0];
        if (thirdData && thirdData.location !== "") {
          setFourth();
        } else {
          handleClick("Select a state and local government");
        }
        break;
      case "fourth":
        const lastData = JSON.parse(localStorage.getItem("regData"))[0];
        // if (lastData) {
        if (lastData && lastData.password !== "") {
          onSubmit();
        } else {
          handleClick("Password didn't match");
        }
        break;
      default:
        return setInitial();
    }
  };

  // Active slides change Handler

  useEffect(() => {
    activeSlide === "fourth" ? setBtnText("Finish Up") : setBtnText("Continue");
  }, [activeSlide]);

  // Form Submit
  const formSubmit = (e) => {
    e.preventDefault();
  };

  const onSubmit = async () => {
    const finalData = JSON.parse(localStorage.getItem("regData"))[0];
    setLoading(true);
    if (finalData) {
      return Axios.post("/register", {...finalData, role: 'marketer'})
        .then((res) => {
          const token = res.data.token;
          // Save Token
          localStorage.setItem("cheToken", token);
          localStorage.removeItem("regData");

          // redirects the user to the dashboard
          history.replace("/user");
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      setLoading(false);
      handleClick("Something went wrong! Please try again");
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AuthLayout>
          <LoginRow className="row">
            <LoginBgStyle className="col-md-6 d-none d-md-block bg-secondary">
              <div className="contentNew">
                <p>
                  Let fourth had man thing. Abundantly second bearing multiply
                  said female hath given give subdue may gathered herb saw moved
                  Him saying bearing which you'll open make that A. Seed days
                  Air moved male form one two place. Winged firmament Together
                  the i two there you above. Called all beginning.
                </p>
                <Link to="/login">
                  <button>Log In</button>
                </Link>
              </div>
            </LoginBgStyle>
            <InputSection className="col-md-6 bg-white">
              <form onSubmit={formSubmit}>
                {slidesHandler()}
                {activeSlide !== "initial" && (
                  <>
                    <ul>
                      <li
                        className={activeSlide === "first" ? "active" : null}
                        // onClick={setFirst}
                      ></li>
                      <li
                        className={activeSlide === "second" ? "active" : null}
                        // onClick={setSecond}
                      ></li>
                      <li
                        className={activeSlide === "third" ? "active" : null}
                        onClick={setThird}
                      ></li>
                      <li
                        className={activeSlide === "fourth" ? "active" : null}
                        onClick={setFourth}
                      ></li>
                    </ul>
                    <button type="submit" onClick={nextSlideHandler}>
                      {btnText}
                    </button>
                    <Snackbar
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      autoHideDuration={4000}
                      open={showSnackBar}
                      onClose={handleClose}
                      message={message}
                      key={"top center"}
                    />
                  </>
                )}
              </form>
            </InputSection>
          </LoginRow>
        </AuthLayout>
      )}
    </>
  );
};

export default Register;

const LoginRow = Styled.div`
    width: 100%;
    min-height: 473px;
    margin: 0;
`;

const LoginBgStyle = Styled.div`
    position: relative;
    background-image: url(${regImage});
    background-size: cover;
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
          transition: all ease-in .4s;

          &:hover {
              background: #0175B1;
          }

          &:focus {
              outline: none;
          }
      }
    }
`;

const InputSection = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        padding-left: 1rem;

        h1 {
            font-size: 1.6rem;
            font-weight: bold;
        }

        p {
          font-size: 0.89rem;
        }

        .Change {
          color: #0175B1;
          cursor: pointer;
        }

        .Change:hover {
          text-decoration: underline;
        }

        .inputFlex {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .inputGroup {
            width: 100%;
        }

        ul {
          width: 150px;
          margin: 2rem auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 0;

          li {
            list-style: none;
            width: 20px;
            height: 7px;
            background: #C4C4C4;
            cursor: pointer
          }

          li.active {
            background: #0175B1;
          }
        }

        hr {
          display: block;
          position: relative;
          margin: 2rem auto;

          &:before {
            position: absolute;
            content: "or";
            width: 30px;
            height: 30px;
            background: #fff;
            top: -15px;
            left: 47%;
          }
        }

        button {
          width: 100%;
          height: 40px;
          margin-top: 1rem;
          background: #0175B1;
          border: none;
          cursor: pointer;
          outline: none;
          font-size: 1rem;
          color: #fff;
          
          &.google {
            background: transparent;
            color: #333;
            border: 1.5px solid #0175B1;
          }
        }
    }
`;
