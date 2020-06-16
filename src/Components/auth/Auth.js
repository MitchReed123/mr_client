import React, { useState } from "react";
import Signup from "../home/Singup";
import Login from "../home/Login";
import "./Auth.css";
import ProfileIndex from "../../ratings/profileIndex";

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const title = () => {
    return login ? (
      <Signup
        updateToken={props.updateToken}
        updateUsername={props.updateUsername}
        updateMessage={props.updateMessage}
      />
    ) : (
      <Login
        updateToken={props.updateToken}
        updateUsername={props.updateUsername}
        updateMessage={props.updateMessage}
      />
    );
  };

  const loginToggle = (event) => {
    event.preventDefault();

    setLogin(!login);

    setUsername("");
    setPassword("");
  };

  const btnStyle = {
    backgroundColor: "#1f2833",
    borderColor: "#66fcf1",
    height: "auto",
    color: "#ffffff",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "20px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
  };

  function Welcoming() {
    return localStorage.getItem("message") === null ? (
      <h1 id="messages" style={{ textAlign: "center" }}>
        <font color="#45A29E">Sign up or Login to see your Ratings</font>
        <font color="#d2553f">!</font>
      </h1>
    ) : localStorage.getItem("message") === "user succesfully logged in" ? (
      <h1>Welcome Back, {localStorage.getItem("username")}!</h1>
    ) : localStorage.getItem("message") === "user created" ? (
      <h1>Welcome , {localStorage.getItem("username")}</h1>
    ) : (
      "null"
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: "50px", marginTop: "25px" }}>{Welcoming()}</h2>
      <form>
        <h1 style={{ marginBottom: "20px" }}>{title()}</h1>
        <button onClick={loginToggle} style={btnStyle}>
          Login/Signup
        </button>
      </form>
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <medium>
          {/* <font color="#45A29E">Copyright </font> */}
          <font color="#45A29E"> Movie</font>
          <font color="#d2553f">/</font>
          <font color="#45A29E">Concert Rating </font>
          <font color="white">&copy;</font>
        </medium>
      </footer>
    </div>
  );
};

export default Auth;
