import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import APIURL from "../../helpers/environment";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log(username, password);
    event.preventDefault();
    fetch(`${APIURL}/user/signup`, {
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
        console.log(data);
        props.updateUsername(data.user.username);
        props.updateMessage(data.message);
      });
  };

  const myStyles = {
    backgroundColor: "#1f2833",
    borderColor: "#66fcf1",
    textDecoration: "bold",
    color: "#ffffff",
    borderRadius: "8px",
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
    fontSize: "20px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
  };

  return (
    <div>
      <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>Sign Up</h1>
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
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="Password(Required)"
            value={password}
            style={myStyles}
            required
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
