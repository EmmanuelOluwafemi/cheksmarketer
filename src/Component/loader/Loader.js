import React from "react";
import styled, { keyframes } from "styled-components";


export const Loader = () => {
  return (
    <LoaderStyle>
      <div className="loader"></div>
    </LoaderStyle>
  );
};

export const SmallLoader = () => {
  return (
    <SmallLoaderStyle>
      <div className="loader"></div>
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

const LoaderStyle = styled.div`
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
    width: 80px;
    height: 80px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border: 5px solid #0175b1;
    animation-name: ${loaderAnimation};
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
  }
`;

const SmallLoaderStyle = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border: 4px solid #0175b1;
    animation-name: ${loaderAnimation};
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
  }
`;
