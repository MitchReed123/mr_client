import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Signup from "../home/Singup";
import Login from "../home/Login";
import "./Auth.css";

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const title = () => {
    return login ? (
      <Signup updateToken={props.updateToken} />
    ) : (
      <Login updateToken={props.updateToken} />
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
    fontSize: "15px",
  };

  return (
    <div>
      <form>
        <h1>{title()}</h1>
        <button onClick={loginToggle} style={btnStyle}>
          Login/Signup
        </button>
      </form>
    </div>
  );
};

export default Auth;
