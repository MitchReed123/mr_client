import React, { useState } from "react";
// import "./Navbar.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log(username, password);
    event.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  const myStyles = {
    backgroundColor: "#1f2833",
    borderColor: "#66fcf1",
    // textDecoration: "bold",
    color: "#ffffff",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    padding: "0",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    maxWidth: "200px",
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
      <h1 style={{ color: "#FFFFFF" }}>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          {/* <Label htmlFor="username">Username</Label> */}
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            placeholder="Username(Required)"
            className="Username"
            value={username}
            style={myStyles}
            minLength="4"
            maxLength="15"
            required
          />
        </FormGroup>
        <FormGroup>
          {/* <Label htmlFor="password">Password</Label> */}
          <Input
            className={StyleSheet.Input}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            className="password"
            placeholder="Password(Required)"
            value={password}
            style={myStyles}
            minLength="4"
            maxLength="15"
            required
          />
        </FormGroup>
        <button type="submit" style={btnStyle}>
          login
        </button>
      </Form>
    </div>
  );
};

export default Login;