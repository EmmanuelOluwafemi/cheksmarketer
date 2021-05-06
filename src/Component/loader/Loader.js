import React from "react";
import Styled, { keyframes } from "styled-components";

import cheksLogo from "./CheksLogo.svg";

export const Loader = () => {
  return (
    <LoaderStyle>
      <div className="loader">
        <img src={cheksLogo} alt="cheks logo" />
      </div>
    </LoaderStyle>
  );
};

export const SmallLoader = () => {
  return (
    <SmallLoaderStyle>
      <div className="loader">
        <img src={cheksLogo} alt="cheks logo" />
      </div>
    </SmallLoaderStyle>
  );
};

const loaderAnimation = keyframes`
    0% {
        transform: scale(.6);
    }

    100% {
        transform: scale(1);
    }
`;

const LoaderStyle = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background: rgba(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;

    .loader {
        width: 104px;
        height: 104px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border: 1px solid #0175B1;
        animation-name: ${loaderAnimation};
        animation-duration: .7s;
        animation-iteration-count: infinite;

        img {
            width: 48px;
            height: auto;
        }
    }
`;

const SmallLoaderStyle = Styled.div`
    width: 100%;
    height: 100%;
    z-index: 5;
    background: rgba(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;

    .loader {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border: 1px solid #0175B1;
        animation-name: ${loaderAnimation};
        animation-duration: .7s;
        animation-iteration-count: infinite;

        img {
            width: 40px;
            height: auto;
        }
    }
`;
