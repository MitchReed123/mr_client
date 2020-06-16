import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import ProfileIndex from "./profileIndex";
import "./sidebar.css";

const sidebar = (props) => {
  function viewPages() {
    return localStorage.getItem("token") === null ? (
      ""
    ) : (
      <li>
        <Link to="/">Ratings</Link>
      </li>
    );
  }
  function viewPages2() {
    return localStorage.getItem("token") === null ? (
      ""
    ) : (
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
    );
  }

  //if session token is null then "" else show profile index
  return (
    <div className="sitebar_all">
      <div className="sidebar">
        <div className="sidebar-list-styling">
          <ul className="sidebar-list list-unstyled">
            {viewPages()}
            {viewPages2()}
          </ul>
        </div>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/">
            {props.protectedViews()}
          </Route>
          <Route exact path="/profile">
            {/* <ProfileIndex token={props.token} /> */}
            {props.protectedViews2}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default sidebar;
