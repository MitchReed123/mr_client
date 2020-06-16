import React, { useState, useEffect } from "react";
import SiteBar from "./Components/home/Navbar";
import Auth from "./Components/auth/Auth";
import RatingsIndex from "./ratings/RatingsIndex";
import ProfileIndex from "./ratings/profileIndex";
import "./App.css";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Sidebar from "./ratings/sidebar";
import ProfileTable from "./Components/profileTable";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUserName(localStorage.getItem("username"));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("message")) {
      setMessage(localStorage.getItem("message"));
    }
  }, []);

  const updateUsername = (newUsername) => {
    localStorage.setItem("username", newUsername);
    setUserName(newUsername);
    console.log(newUsername);
  };

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  const updateMessage = (newMessage) => {
    localStorage.setItem("message", newMessage);
    setMessage(newMessage);
    console.log(message);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
    setUserName("");
    setMessage("");
    sessionStorage.clear();
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <RatingsIndex token={sessionToken} />
    ) : (
      <Auth
        updateToken={updateToken}
        updateUsername={updateUsername}
        updateMessage={updateMessage}
      />
    );
  };

  const protectedViews2 = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <ProfileIndex token={sessionToken} />
    ) : (
      <Auth
        updateToken={updateToken}
        updateUsername={updateUsername}
        updateMessage={updateMessage}
      />
    );
  };

  return (
    <div className="App">
      <Router>
        <SiteBar clickLogout={clearToken} />
        <Sidebar
          protectedViews={protectedViews}
          token={sessionToken}
          protectedViews2={protectedViews2}
        />
      </Router>
      {/* <SiteBar clickLogout={clearToken} />
      <br />
      {protectedViews()} */}
    </div>
  );
}

export default App;
