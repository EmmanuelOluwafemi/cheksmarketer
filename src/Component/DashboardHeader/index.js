import React, { useState, useEffect } from "react";
import Styled from "styled-components";

// import { IoIosNotifications } from 'react-icons/io';
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "./images/logo.svg";

import AxiosAuth from "../../lib/AxiosAuth";

const DashboardHeader = ({ setSidebar }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AxiosAuth()
      .get(`/user`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSidebar = () => {
    setSidebar(true);
  };

  // const handleDropdown = () => {
  //     setDropdown(!dropdown);
  // }

  return (
    <HeaderStyle>
      <RiMenu4Line onClick={handleSidebar} className="mobileToggler" />
      <Link to="/" className="logo">
        <img src={logo} alt="cheksng logo" />
      </Link>
      <div className="userInfo">
        {/* <div onClick={handleDropdown} className="notification">
                    <IoIosNotifications className="icons" />
                    <div className="postActive"></div>
                    <ul className={dropdown ? "dropdown show" : 'dropdown'}>
                        <li>Recent Activities</li>
                        <li>Recent Activities</li>
                        <li>Recent Activities</li>
                        <li>Recent Activities</li>
                    </ul>
                </div> */}
        <div className="avatar">
          <img
            src={
              data.image
                ? data.image
                : "http://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
            }
            alt={data.name}
          />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default DashboardHeader;

const HeaderStyle = Styled.div`
    width: 100%;
    height: 80px;
    background: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 5%;

    @media (max-width: 768px) {
        justify-content: space-between;
        padding: 0 3%;
    }

    .mobileToggler {
        display: none;

        @media (max-width: 768px) {
            display: block;
            font-size: 1.8rem;
            cursor: pointer;
        }
    }

    .logo {
        display: none;

        @media (max-width: 768px) {
            display: block;

            img {
                width: 100px;
                height: auto;
            }
        }
    }
    
    .userInfo {
        display: flex;

        .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #eee;
            cursor: pointer;
            overflow: hidden;

            img {
                width: 100%;
                height: auto;
            }
        }

        .notification {
            position: relative;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(225, 245, 255, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1.5rem;
            cursor: pointer;

            .icons {
                font-size: 1.3rem;
                color: #0175B1;
            }

            .postActive {
                position: absolute;
                top: 30%;
                left: 50%;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: red;
            }

            .dropdown {
                position: absolute;
                top: 130%;
                right: 0;
                z-index: 77;
                width: 300px;
                min-height: 200px;
                border-bottom: 2px solid #0175B1;
                border-left: 2px solid #0175B1;
                border-right: 2px solid #0175B1;
                background: #fff;
                border-bottom-left-radius: 10px; 
                border-bottom-right-radius: 10px; 
                list-style: none;
                padding: 0;
                /* opacity: 0;
                transform: scaleY(0);
                transform-origin: top; */
                display: none;
                transition: .4s ease-in-out all;

                &.show {
                    /* opacity: 1;
                    transform: scaleY(1); */
                    display: block;
                }

                li {
                    width: 100%;
                    padding: 12px 16px;
                    border-bottom: 1px solid rgba(0, 0, 0, .1);

                    &:hover {
                        background: rgba(225, 245, 255, 0.4);
                    }

                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
        }
    }

`;
