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
import Messages from "./Pages/Messages";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <AdminDashboard />
        </Route>
        <Route exact path="/dashboard/subscribe">
          <Subscriber />
        </Route>
        <Route exact path="/dashboard/comliant">
          <AddCompliant />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/profile/edit">
          <EditProfile />
        </Route>
        <Route exact path="/message">
          <Messages />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
