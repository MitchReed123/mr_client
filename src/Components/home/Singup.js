import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log(username, password);
    event.preventDefault();
    fetch("http://localhost:3000/user/signup", {
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
    textDecoration: "bold",
    color: "#ffffff",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    textAlign: "center",
    padding: "0",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      <h1 style={{ color: "#FFFFFF" }}>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          {/* <Label htmlFor="username">Username</Label> */}
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Username(Required)"
            value={username}
            style={myStyles}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
            title="Must contain atleast one number and one uppercase and lowercase letter, and at least 4 or more characters"
            // minLength="4"
            // maxLength="15"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            // type="password"
            placeholder="Password(Required)"
            value={password}
            style={myStyles}
            required
            // minLength="5"
            // maxLength="40"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters"
          />
        </FormGroup>
        <button type="submit" style={btnStyle}>
          Signup
        </button>
      </Form>
    </div>
  );
};

export default Signup;
