import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Sidebar from "../../Component/Sidebar";

import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiEmotionUnhappyFill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";

import { NavLink, useHistory } from "react-router-dom";
import DashboardHeader from "../../Component/DashboardHeader";

const AdminDashboardLayout = (props) => {
  const [sideBar, setSidebar] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("makToken")) {
      localStorage.removeItem("makToken");
      history.push("/login");
    }
  }, [history]);

  const handleLogout = () => {
    console.log("click");
    if (localStorage.getItem("makToken")) {
      localStorage.removeItem("makToken");
      history.push("/login");
    }
  };

  return (
    <DashboardLayoutStyle>
      <Sidebar sideBar={sideBar} setSidebar={setSidebar}>
        <SidebarList>
          <NavLink exact activeClassName="active" to="/dashboard">
            <AiFillDashboard className="icons" /> Dashboard
          </NavLink>
          <NavLink activeClassName="active" to="/dashboard/subscribe">
            <AiOutlineUsergroupAdd className="icons" /> Subscriber
          </NavLink>
          <NavLink activeClassName="active" to="/dashboard/complaint">
            <RiEmotionUnhappyFill className="icons" /> Add Complaint
          </NavLink>
          <NavLink activeClassName="active" to="/profile">
            <FaUserAlt className="icons" /> Profile
          </NavLink>
          <div onClick={handleLogout} className="log">
            <BiLogOut className="icons" /> Logout
          </div>
        </SidebarList>
      </Sidebar>
      <div className="contentContainer">
        <DashboardHeader setSidebar={setSidebar} />
        <div className="content">{props.children}</div>
      </div>
    </DashboardLayoutStyle>
  );
};

export default AdminDashboardLayout;

const DashboardLayoutStyle = Styled.div`
    max-width: 100vw;
    min-height: 100vh;
    padding-left: 240px;

    @media (max-width: 768px) {
        padding-left: 0;
    }

    .content {
        padding: 32px 5%;

        @media (max-width: 768px) {
            padding: 40px 3%;
        }
    }
`;

const SidebarList = Styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    a, .log {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        padding-left: 32px;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 8px;
        color: #ACB8BE;
        line-height: 24px;
        border-radius: 8px;
        text-transform: uppercase;  
        cursor: pointer;  
        text-decoration: none;

        .icons {
            font-size: 1.4rem;
            margin-right: 1rem;
        }

        &:hover, &.active {
            background: rgba(225, 245, 255, 0.4);
            color: #0175B1;

            &.icon {
                color: #0175B1;
            }
        }
    }
`;
