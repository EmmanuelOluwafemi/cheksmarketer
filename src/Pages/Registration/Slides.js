import React, { useState, useEffect } from "react";
import { v4 as generateId } from "uuid";
import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import GoogleLogin from 'react-google-login';

import Axios from "../../lib/Axios";

import NaijaStates from 'naija-state-local-government';


const InitialSlide = ({ emailBtn }) => {
  
  const history = useHistory();

  const responseGoogle = (response) => {

    const regData = {
      type: "google",
      google_id: response.googleId,
      token_id: response.tokenId,
      role: 'marketer'
    }

    Axios.post("/oauth/authenticate", regData)
      .then((res) => {
        const token = res.data.token;

        localStorage.setItem("makToken", token);

        // redirects the user to the dashboard
        history.replace("/user");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1>Hello!</h1>
      <p>Please pick a method and get started</p>
      <div className="authMenu">
        <button onClick={() => emailBtn()}>
          <AiOutlineMail /> Sign up with Email
        </button>
        <hr />
        <GoogleLogin 
            clientId="170401860687-eq844p2da63gj1mdhd82bsgn76pnim45.apps.googleusercontent.com"
            buttonText=" Sign In With Google "
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className="googleBtn"
          />
      </div>
    </>
  );
};

const FirstSlide = () => {
  const days = [];
  for (let num = 1; num < 32; num++) {
    days.push({
      value: num,
      label: num,
    });
  }

  const months = [
    {
      value: "Jan",
      label: "January",
    },
    {
      value: "Feb",
      label: "February",
    },
    {
      value: "Mar",
      label: "March",
    },
    {
      value: "Apr",
      label: "April",
    },
    {
      value: "May",
      label: "May",
    },
    {
      value: "Jun",
      label: "June",
    },
    {
      value: "Jul",
      label: "July",
    },
    {
      value: "Aug",
      label: "August",
    },
    {
      value: "Sep",
      label: "September",
    },
    {
      value: "Oct",
      label: "October",
    },
    {
      value: "Nov",
      label: "November",
    },
    {
      value: "Dec",
      label: "December",
    },
  ];

  const years = [];
  const currentYear = new Date().getFullYear() - 15;
  for (let num = 1940; num <= currentYear; num++) {
    years.push({
      value: num,
      label: num,
    });
  }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState("1970");

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const dayHandler = (event) => {
    setDay(event.target.value);
  };
  const monthHandler = (event) => {
    setMonth(event.target.value);
  };
  const yearHandler = (event) => {
    setYear(event.target.value);
  };

  const firstSlideData = () => {
    if (firstName !== "" && lastName !== "") {
      const formData = [];
      let dataCollector = {
        role: "user",
        name: `${firstName} ${lastName}`,
        date_of_birth: `${day}/${month}/${year}`,
      };
      formData.push(dataCollector);
      localStorage.setItem("regData", JSON.stringify(formData));
    }
  };

  useEffect(() => {
    firstSlideData();
    // eslint-disable-next-line
  }, [year, month, day, firstName, lastName]);

  return (
    <div>
      <h1>Personal Info</h1>
      <p>Hello, Lets get you registered</p>
      <div className="inputGroup mt-4">
        <TextField
          label="First Name"
          variant="outlined"
          margin="dense"
          fullWidth={true}
          type="text"
          value={firstName}
          onChange={firstNameHandler}
        />
      </div>

      <div className="inputGroup mt-3">
        <TextField
          label="Last Name"
          margin="dense"
          type="text"
          variant="outlined"
          fullWidth={true}
          value={lastName}
          onChange={lastNameHandler}
        />
      </div>
      <div className="inputGroup mt-4 ">
        <div className="inputFlex">
          <TextField
            select
            label="Day"
            value={day}
            onChange={dayHandler}
            variant="outlined"
            fullWidth={true}
            margin="dense"
          >
            {days.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Month"
            value={month}
            onChange={monthHandler}
            variant="outlined"
            fullWidth={true}
            margin="dense"
            className="ml-3"
          >
            {months.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Year"
            value={year}
            onChange={yearHandler}
            variant="outlined"
            fullWidth={true}
            margin="dense"
            className="ml-3"
          >
            {years.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
    </div>
  );
};

const SecondSlide = () => {
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const secondSlideData = () => {
    if (email !== "" && phone !== "") {
      const firstData = JSON.parse(localStorage.getItem("regData"))[0];
      const formData = [{ ...firstData, telephone: `+234${phone}`, email }];

      localStorage.setItem("regData", JSON.stringify(formData));
    }
  };

  useEffect(() => {
    secondSlideData();
    // eslint-disable-next-line
  }, [gender, email, phone]);

  return (
    <>
      <h1>Contact Info</h1>
      <p>we promise not to spam</p>
      <div className="inputGroup mt-3 ">
        <div className="inputFlex">
          <TextField
            margin="dense"
            label="Email"
            variant="outlined"
            fullWidth={true}
            type="email"
            value={email}
            onChange={emailHandler}
          />
        </div>
      </div>
      <div className="inputGroup mt-3 ">
        <div className="inputFlex">
          <TextField
            margin="dense"
            disabled
            label="+234"
            variant="outlined"
            className="mr-2"
          />
          <TextField
            margin="dense"
            label="Phone"
            variant="outlined"
            fullWidth={true}
            type="number"
            value={phone}
            onChange={phoneHandler}
          />
        </div>
      </div>
      <div className="inputGroup mt-3 ">
        <TextField
          select
          label="Gender"
          value={gender}
          onChange={genderHandler}
          variant="outlined"
          margin="dense"
          // style={{ width: "50%" }}
          fullWidth
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>
      </div>
    </>
  );
};

const ThirdSlide = () => {
  const [states, setStates] = useState([]);
  const [lg, setLg] = useState([]);
  const [chosenState, setChosenState] = useState("");
  const [newLg, setNewLg] = useState("");

  useEffect(() => {
    // console.log(NaijaStates.states())
    setStates(NaijaStates.states())
  }, []);

  const handleOptionChange = (e) => {
    let stateName = e.target.value;
    setChosenState(stateName);
    
    setLg(NaijaStates.lgas(stateName).lgas);
  };

  const lgHandler = (e) => {
    setNewLg(e.target.value);
  };

  const thirdSlideData = () => {
    if (chosenState !== "" && newLg !== "") {
      const firstData = JSON.parse(localStorage.getItem("regData"))[0];
      const formData = [{ ...firstData, location: `${newLg}, ${chosenState}` }];
      // console.log(formData);
      localStorage.setItem("regData", JSON.stringify(formData));
    }
  };

  useEffect(() => {
    thirdSlideData();
    // eslint-disable-next-line
  }, [newLg, chosenState]);

  return (
    <>
      <h1>Almost There</h1>
      <p>Just some few more info</p>
      <div className="inputGroup mt-2">
        <TextField
          select
          label="State"
          value={chosenState}
          onChange={handleOptionChange}
          variant="outlined"
          fullWidth={true}
          margin="dense"
        >
          {states.map((option) => (
            <MenuItem key={generateId()} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="inputGroup mt-3">
        <TextField
          select
          label="Local Government"
          variant="outlined"
          fullWidth={true}
          margin="dense"
          onChange={lgHandler}
          value={newLg}
        >
          {lg &&
            lg.map((area) => (
              <MenuItem value={area} key={generateId()}>
                {area}
              </MenuItem>
            ))}
        </TextField>
      </div>
      <div className="inputGroup mt-3">
        <TextField
          label="Address"
          variant="outlined"
          fullWidth={true}
          type="text"
          margin="dense"
        />
      </div>
    </>
  );
};

const FourthSlide = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmHandler = (event) => {
    setConfirm(event.target.value);
  };

  const lastSlideData = () => {
    if (password === confirm) {
      const lastData = JSON.parse(localStorage.getItem("regData"))[0];
      const formData = [{ ...lastData, password }];

      localStorage.setItem("regData", JSON.stringify(formData));
    }
  };

  useEffect(() => {
    lastSlideData();
    // eslint-disable-next-line
  }, [password, confirm]);

  return (
    <>
      <h1>Hurray!</h1>
      <p>Lets Finish Up!</p>
      <div className="inputGroup mt-4">
        <TextField
          label="Password"
          variant="outlined"
          fullWidth={true}
          type="password"
          margin="dense"
          value={password}
          onChange={passwordHandler}
        />
      </div>
      <div className="inputGroup mt-4">
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth={true}
          type="password"
          margin="dense"
          value={confirm}
          onChange={confirmHandler}
        />
      </div>
      <div className="inputGroup mt-3 ">
        <label className="mt-2" style={{ fontSize: "0.9rem" }} htmlFor="checks">
          Clicking on "Finish up" means you have{" "}
          <Link to="/terms">Accept Terms and Condition</Link>
        </label>
      </div>
    </>
  );
};

export { InitialSlide, FirstSlide, SecondSlide, ThirdSlide, FourthSlide };
