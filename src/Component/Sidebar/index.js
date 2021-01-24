import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom'; 

import logo from '../DashboardHeader/images/logo.svg';

const Sidebar = ({ setSidebar, sideBar, children }) => {

    const handleOverlay = () => {
        setSidebar(false)
    }

    return (
        <>
        {sideBar && <Overlay onClick={handleOverlay} />}
        <SidebarStyle className={sideBar ? 'sidebarShow' : ''}>
            <Link to="/dashboard"><img src={logo} alt="cheksng logo" /></Link>
            <div className="navLinks">
                {children}
            </div>
        </SidebarStyle>
        </>
    )
}

export default Sidebar;

const SidebarStyle = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    a {
        margin-top: 24px;

        img {
            width: 150px;
            height: auto;
        }
    }

    .navLinks {
        width: 100%;
        padding: 0 1rem;
        margin-top: 5rem;
    }

    @media (max-width: 768px) {
        opacity: 0;
        transform: translateX(-400px);
        transition: all .4s ease-in;

        &.sidebarShow {
            display: flex;
            z-index: 88;
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const Overlay = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .4);
`;