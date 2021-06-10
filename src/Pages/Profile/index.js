import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import { RiUserLocationLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { IoMdCall } from "react-icons/io";

import AxiosAuth from "../../lib/AxiosAuth";
import AdminDashboardLayout from "../../Layout/AdminDashboardLayout";
import { Loader } from "../../Component/loader/Loader";
import PaymentModal from "../../Component/Payment/PaymentModal";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [widthdraw, setWithdraw] = useState(false);

  useEffect(() => {
    setLoading(true);
    AxiosAuth()
      .get("/user")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .then(() => {
        axios
          .get("https://api.paystack.co/bank")
          .then((res) => {
            setBanks(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleWithdraw = () => {
    return setWithdraw(!widthdraw);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AdminDashboardLayout>
          {widthdraw && (
            <PaymentModal handleWithdraw={handleWithdraw} banks={banks} />
          )}
          <ProfileContainer>
            <h1>Profile</h1>
            <div className="row">
              <ProfileCard className="col-md-5">
                <div className="avatar">
                  <img
                    src={
                      user.image
                        ? user.image
                        : "https://res.cloudinary.com/dhqvopvj4/image/upload/v1623296487/avatar_rm5wit.jpg"
                    }
                    alt="user profile"
                  />
                </div>
                <h2>{user.name}</h2>
                <p>Premium</p>

                <ul className="description">
                  <li>
                    <RiUserLocationLine className="icons" />
                    {user.location}
                  </li>
                  <li>
                    <SiMinutemailer className="icons" />
                    {user.email}
                  </li>
                  <li>
                    <IoMdCall className="icons" />
                    {user.telephone}
                  </li>
                </ul>
              </ProfileCard>
              <RightContent className="col-md-7">
                <div className="idCard">
                  <div className="title">
                    <div className="textTitle">User Id</div>
                    <button>Copy</button>
                  </div>
                  <h2>{user.role_id}</h2>
                  <p>Personal</p>
                </div>

                <div className="ml-0 ml-md-3 otherContainer">
                  <div className="row">
                    <Card className="col-md-5 mx-3 mx-md-0">
                      <h4>Wallet</h4>
                      <h1>{user.wallet}</h1>
                      <button onClick={handleWithdraw}>Withdraw Balance</button>
                    </Card>
                    <Card className="col-md-5 mx-3 mx-md-0 ml-md-3">
                      <h4>Points</h4>
                      <h1>{user.points}</h1>
                    </Card>
                  </div>
                </div>

                <div className="buttonSpacer">
                  <Link to="/profile/edit">Edit Profile</Link>
                </div>
              </RightContent>
            </div>
          </ProfileContainer>
        </AdminDashboardLayout>
      )}
    </>
  );
};

export default Profile;

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
        padding: 0;
        overflow: hidden;

        img {
            position: absolute;
            width: 110%;
            height: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 16px 0;
        margin-top: 24px;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        margin-top: 0;
    }

    .description {
        padding: 1rem 1.2rem;
        border-top: 1px solid rgba(0, 0, 0, .4);
        border-bottom: 1px solid rgba(0, 0, 0, .4);
        list-style: none;

        li {
            font-size: 1rem;
            font-weight: 500;
            padding: 6px 0;
            color: rgba(0, 0, 0, .7);

            .icons {
                color: #0175B1;
                margin-right: 16px;
                font-size: 1.2rem;
            }
        }
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

const RightContent = Styled.div`
    width: 100%;

    .buttonSpacer {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 48px;

        a { 
            padding: 12px 16px;
            background: #0175B1;
            color: #fff;
            outline: none;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            &:hover {
                background: #056b9e;
            }
        }
    }

    .idCard {
        width: 100%;
        height: 220px;
        background: #fff;
        padding: 1.5rem;

        .title {
            display: flex;
            justify-content: space-between;

            .textTitle {
                font-size: 1rem;
                color: #2D2323;
                font-weight: 400;
            }

            button {
                background: none;
                border: none;
                outline: none;
                color: #0175B1;
                font-weight: bold;
                font-size: 1rem;
            }

        }
        h2 {
            font-size: 1.8rem;
            font-weight: bold;
            color: #04172A;
            margin-top: 24px;
        }

        p {
            font-size: 1rem;
            color: #2D2323;
            margin-top: 72px;
        }
    }

    .otherContainer {
        width: 100%;
    }
`;

const Card = Styled.div`
    background: #fff;
    margin: 24px 0;
    border-top: 10px solid #0175B1;
    padding: 24px 16px;

    h4 {
        font-size: 1rem;
        color: rgba(0, 0, 0, .7);
    }

    button {
        border: none;
        outline: none;
        background: none;
        font-size: 1rem;
        color: #0175B1;
        font-weight: bold;
        text-decoration: underline;
    }
`;
