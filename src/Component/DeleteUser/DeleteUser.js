import { Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import Styled from "styled-components";
import AxiosAuth from "../../lib/AxiosAuth";
import DashboardModal from "../DashboardModal";

const DeleteUser = ({ userRole, userId, openModal, setModal }) => {
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const reset = () => {
    setDeleted(false);
    setModal(false);
  };

  // handle err
  const handleClick = (mes) => {
    setErrorMessage(mes);
    setShowSnackBar(true);
  };

  const handleClose = () => {
    setShowSnackBar(false);
  };

  const deleteHandler = () => {
    const data = {
      account_type: userRole,
      user_id: userId,
    };
    console.log(data);
    return AxiosAuth().delete("/admin/delete-users", data)
      .then((res) => {
        console.log(res);
        handleClick(`Successfully Deactivated ${userRole} Account for `);
        // ${res.data.data.name}
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        handleClick(err.response.data.message);
      });
  };

  return (
    <>
      <DashboardModal openModal={openModal} setModal={reset}>
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

        <Delete>
          {!deleted ? (
            <>
              <h1>Delete {userRole} ?</h1>

              <p>
                You are about to remove this {userRole} Account, They will no
                longer be able to use cheks Do you wish to continue
              </p>

              <div id="bfl">
                <button onClick={deleteHandler} id="filled">
                  Delete
                </button>
                <button onClick={() => reset()}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <p>{userRole} Account, Successfully Deleted!</p>
              <div id="bfl">
                <button onClick={() => reset()}>Close</button>
              </div>
            </>
          )}
        </Delete>
      </DashboardModal>
    </>
  );
};
export default DeleteUser;

export const Delete = Styled.div`
    text-align: center;

    h1 {
        color: #0175B1;
        margin-bottom: 2rem;
    }

    p {
      width: 70%;
      margin: auto;
      font-size: 1.2rem;
    
      @media screen and (max-width: 573px) { 
        width: 95%;
        margin-top: 1.2rem;
        font-size: 0.95rem;
      }

    }

    #bfl {
    margin: 2rem auto;
    }

    button {
        border-radius: 4px;
        outline: none;
        width: 90px;
        height: 35px;
        color: #fff;
        cursor: pointer;
        background: #0175B1;
        border: none;
        cursor: pointer;
        transition: all 0.4s;

        &:hover {
            opacity: 0.5;
        }
    }

    #filled {
        background: rgba(244, 13, 41, 0.8); 
        margin-right: 2rem;        
    }
`;
