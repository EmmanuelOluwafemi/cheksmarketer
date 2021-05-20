import React, { useState, useEffect } from "react";

import Styled from "styled-components";
import DashboardModal from "../../Component/DashboardModal";
import AxiosAuth from "../../lib/AxiosAuth";
import { Snackbar } from "@material-ui/core";
import AdminDashboardLayout from "../../Layout/AdminDashboardLayout";
import { Loader } from "../../Component/loader/Loader";

const EditProfile = () => {
  const [openModal, setModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [telephone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    AxiosAuth()
        .get("/user")
        .then((res) => {
            setUser(res.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false)
        });
  }, [])

  //   reset State
  const reset = () => {
    setSubmitted();
    setName("");
    setLocation("");
    setPhone("");
    setImage("");
  };

  // handle err
  const handleClick = (mes) => {
    setErrorMessage(mes);
    setShowSnackBar(true);
    setSubmitted(false);
  };

  const handleClose = () => {
    setShowSnackBar(false);
  };

  const handleOnclick = (e) => {
    e.preventDefault();

    setModal(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setModal(false);
  };

  const handleSubmit = () => {
    const data = {
      name,
      telephone,
      location,
      image
    };
    return AxiosAuth().put("/account/update-profile", data)
      .then((res) => {
        handleClick(
          `Successfully Updated ${name} Account`
        );
        reset();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        handleClick(err.response.data.message);
      });
  }

  return (
    <>
    {
      loading ? 
        <Loader />:
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
          <button onClick={handleSubmit} className="active">{submitted ? (
                <div className="spinner-border text-dark" role="status"></div>
              ) : (
                "Edit Profile"
              )}</button>
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
              <img src={
                  user.image ? 
                      user.image:
                      'http://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png'
              } alt="user profile"/>
              <input name='image' type="file" id="avatar" hidden />
              <label htmlFor="avatar">+</label>
            </div>
            <h2>{user.name}</h2>
            <h6>{user.role_id}</h6>
            <p>Premium</p>
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="name">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="name">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Enter Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="buttonSpacer">
              <button onClick={handleOnclick}>Submit</button>
            </div>
          </FormStyle>
        </div>

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
      </ProfileContainer>
    </AdminDashboardLayout>
  }
  </>
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

const ProfileContainer = Styled.form`
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
            width: 110%;
            height: auto;
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

const FormStyle = Styled.div`
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
