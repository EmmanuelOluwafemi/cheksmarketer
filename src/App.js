import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./Pages";
import Login from "./Pages/Login";
import Subscriber from "./Pages/Subscriber";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/Profile/EditProfile";
import AddCompliant from "./Pages/AddCompliant";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from './Pages/ForgetPassword/Reset';
import Register from "./Pages/Registration";

import Mising from './Pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/reset_password/:email/:token">
          <ResetPassword />
        </Route>
        <Route exact path="/forget_password">
          <ForgetPassword />
        </Route>
        <Route exact path="/dashboard">
          <AdminDashboard />
        </Route>
        <Route exact path="/dashboard/subscribe">
          <Subscriber />
        </Route>
        <Route exact path="/dashboard/complaint">
          <AddCompliant />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/profile/edit">
          <EditProfile />
        </Route>
        <Route path="">
          <Mising />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
