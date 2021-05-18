import { Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import DashboardModal from "../Component/DashboardModal";
import Axios from "../lib/Axios";
import { ModalContent } from "../Style/ModalContainer";

const CreateUser = ({ userType, title, openModal, setModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [telephone, setPhone] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [password, setPassword] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState([])

  //   reset State
  const reset = () => {
    setSubmitted();
    setName("");
    setEmail("");
    setLocation("");
    setPhone("");
    setDate_of_birth("");
    setPassword("");
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

  //   check error

  const checkSubmit = () => {
    if (!name || !email || !location || !telephone || !date_of_birth) {
      handleClick("All Fields Are Required");
    } else {
      const data = {
        name,
        email,
        telephone,
        date_of_birth,
        location,
        role: userType,
        password: password || "password1234",
      };
      return Axios.post("/marketer/create-user", data)
        .then((res) => {
          handleClick(
            `Successfully Created ${userType} Account for ${res.data.data.name}`
          );
          reset();
        })
        .catch((err) => {
          console.log(err.response.data);
          setError(err.response.data.errors);
          handleClick(err.response.data.message);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    checkSubmit();
  };

  return (
    <DashboardModal openModal={openModal} setModal={setModal}>
      <ModalContent>
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
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="inputGroup">
                <label htmlFor="">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {error.name && <p className="error">{error.name}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="inputGroup">
                <label htmlFor="">Email Address *</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && <p className="error">{error.email}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="inputGroup">
                <label htmlFor="">Phone Number *</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  name="telephone"
                  id="telephone"
                  value={telephone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {error.telephone && <p className="error">{error.telephone}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="inputGroup">
                <label htmlFor="">Date of Birth *</label>
                <input
                  type="text"
                  placeholder="day/month/year"
                  name="date_of_birth"
                  id="date_of_birth"
                  value={date_of_birth}
                  onChange={(e) => setDate_of_birth(e.target.value)}
                />
                {error.date_of_birth && <p className="error">{error.date_of_birth}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="inputGroup">
                <label htmlFor="">Location *</label>
                <input
                  type="text"
                  placeholder="Select Location"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {error.location && <p className="error">{error.location}</p>}
              </div>
            </div>
            <div className="col-6">
              <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Leave Empty to use Default password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error.password && <p className="error">{error.password}</p>}
              </div>
            </div>
          </div>

          <div className="buttonContainer">
            <button>
              {submitted ? (
                <div className="spinner-border text-dark" role="status"></div>
              ) : (
                "Create User"
              )}
            </button>
          </div>
        </form>
      </ModalContent>
    </DashboardModal>
  );
};

export default CreateUser;
