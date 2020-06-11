import React, { useState, useEffect } from "react";
import SiteBar from "../src/Components/home/Navbar";
import Auth from "./Components/auth/Auth";
import RatingsIndex from "./ratings/RatingsIndex";
import "./App.css";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <RatingsIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      <SiteBar clickLogout={clearToken} />
      {protectedViews()}
    </div>
  );
}

export default App;
