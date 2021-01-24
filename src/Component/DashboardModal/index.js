import React from 'react';
import Styled from 'styled-components';

import { IoClose } from 'react-icons/io5';

const DashboardModal = ({ children, openModal, setModal }) => {

    const handleClose = () => {
        setModal(false);
    }

    return (
        <ModalStyle className={openModal ? 'show' : ''}>
            <div className="modalContainer">
                <div onClick={handleClose} className="close"><IoClose /></div>
                { children }
            </div>
        </ModalStyle>
    )
}

export default DashboardModal;

const ModalStyle = Styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 6;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .6);
    display: none;
    justify-content: center;
    align-items: center;

    &.show {
        display: flex;
    }

    .modalContainer {
        position: relative;
        margin: 0 3%;
        width: 100%;
        max-width: 700px;
        min-height: 500px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .close {
            position: absolute;
            top: 24px;
            right: 24px;
            color: red;
            cursor: pointer;
        }
    }
`;