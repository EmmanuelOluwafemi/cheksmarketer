import React, { useState } from "react";

import Styled from "styled-components";
import DashboardModal from "../../Component/DashboardModal";
import avatar from './avatar.png';
import AdminDashboardLayout from '../../Layout/AdminDashboardLayout/index.js';

const EditProfile = () => {
  const [openModal, setModal] = useState(false);

  const handleOnclick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setModal(false);
  };

  return (
    <AdminDashboardLayout>
      <DashboardModal openModal={openModal} setModal={setModal}>
        <h1 style={{ fontSize: "1.6rem", fontWeight: "bold" }}>Edit Profile</h1>
        <p
          style={{
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          Are you sure you are interested in making changes to your profile
          details.
        </p>
        <Buttons>
          <button className="active">Edit Profile</button>
          <button onClick={handleCancel} className="outlineError">
            Cancel
          </button>
        </Buttons>
      </DashboardModal>
      <ProfileContainer>
        <h1>Edit Profile</h1>
        <div className="row">
          <ProfileCard className="col-md-5">
            <div className="avatar">
              <img src={avatar} alt="user profile" />
              <input type="file" id="avatar" hidden />
              <label htmlFor="avatar">+</label>
            </div>
            <h2>Bessie Cooper</h2>
            <h6>CEK4285883022543</h6>
            <p>Admin</p>      
          </ProfileCard>

          <FormStyle className="col-md-7">
            <h3>Basic Info</h3>
            <div className="inputGroup">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Fullname"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="name">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="name">Country</label>
              <input
                id="country"
                name="country"
                type="text"
                placeholder="Enter Country"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="name">State</label>
              <input
                id="state"
                name="state"
                type="text"
                placeholder="Enter State"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="name">Local Governement</label>
              <input
                id="local"
                name="local"
                type="text"
                placeholder="Enter Local Governement"
              />
            </div>

            <div className="buttonSpacer">
              <button onClick={handleOnclick}>Submit</button>
            </div>
          </FormStyle>
        </div>
      </ProfileContainer>
    </AdminDashboardLayout>
  );
};

export default EditProfile;

const Buttons = Styled.div`
    display: flex;
    margin-top: 20px;

    button {
        outline: none;
        border: none;
        padding: 0.7rem 1rem;

        &.active {
            background: #0175B1;
            color: #fff;
            margin-right: 16px;

            &:hover {
                background: #036292;
            }
        }

        &.outlineError {
            background: none;
            border: 1px solid red;
            color: red;

            &:hover {
                background: red;
                color: white;
            }
        }
    }
`;

const ProfileContainer = Styled.div`
    width: 100%;
    min-height: 700px;

    h1 {
        color: #0175B1;
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 32px;
    }
`;

const ProfileCard = Styled.div`
    width: 100%;
    min-height: 600px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .avatar {
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 3px solid #0175B1;
        overflow: hidden;
        
        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        label {
            position: absolute;
            bottom: 10px;
            right: 9%;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 16px 0;
        margin-top: 24px;
    }

    h6 {
        font-size: 1.2rem;
        color: rgba(0, 0, 0, .5);
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        margin-top: 0;
    }

    .status {
        margin-top: 1.3rem;
        font-weight: 500;
        font-size: 1rem;
        color: rgba(0, 0, 0, .7);

        span {
            color: red;
            margin-left: 8px;
            font-weight: 600;
        }

        button {
            border: none;
            outline: none;
            background: #06BA49;
            color: #fff;
            font-weight: 500;
            padding: 12px 16px;

            &:hover {
                background: #06a741;
            }
        }
    }
`;

const FormStyle = Styled.form`
    background: #fff;
    box-sizing: border-box;
    border-left: 1px solid rgba(0, 0, 0, .3);
    padding: 48px 32px;

    h3 {
        font-size: 1.7rem;
        font-weight: bold;
        color: rgba(0, 0, 0, .7);
        margin-bottom: 1.7rem;
    } 

    .inputGroup {
        width: 100%;

        label {
            display: block;
        }

        input {
            width: 100%;
            height: 48px;
            padding: 0 16px;
            margin-bottom: 24px;
            border: 1px solid rgba(0, 0, 0, .3);
            outline: none;

            &:hover, &:focus {
                border: 2px solid #0175B1;
            }
        }
    }

    .buttonSpacer {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        button {
            padding: 12px 16px;
            border: none;
            outline: none;
            background: #0175B1;
            color: #fff;
            font-size: 1rem;

            &:hover {
                background: #025f8d;
            }
        }
    }
`;
