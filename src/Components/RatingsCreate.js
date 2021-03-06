import React, { useState } from "react";
import "./home/Navbar.css";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import APIURL from "../helpers/environment";

const RatingCreate = (props) => {
  const [showName, setShowName] = useState("");
  const [showType, setShowType] = useState("");
  const [showRating, setShowRating] = useState("");
  const [myRating, setMyRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/rating`, {
      method: "POST",
      body: JSON.stringify({
        showName: showName,
        showType: showType,
        showRating: showRating,
        myRating: myRating,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
    })
      .then((res) => res.json())
      .then((ratingData) => {
        console.log(ratingData);
        setShowName("");
        setShowType("");
        setShowRating("");
        setMyRating("");
        props.fetchRatings();
      })
      .catch((err) => console.log(err));
  };

  const myStyles = {
    backgroundColor: "#1f2833",
    borderColor: "#d2553f",
    textDecoration: "bold",
    color: "#ffffff",
    borderRadius: "8px",
    textAlign: "center",
    padding: "0",
    margin: "0",
  };

  return (
    <div id="createDiv">
      <br />
      <h2 style={{ color: "#000000", textAlign: "center" }}>
        Create a Rating!
      </h2>
      <Form onSubmit={handleSubmit} inLine Form>
        <Row>
          <Col md="3">
            <FormGroup>
              <Label htmlFor="showName" />
              <Input
                name="showName"
                value={showName}
                placeholder="Show Name"
                onChange={(e) => setShowName(e.target.value)}
                style={myStyles}
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label htmlFor="showType" />
              <Input
                name="showType"
                value={showType}
                placeholder="Shows Type"
                onChange={(e) => setShowType(e.target.value)}
                style={myStyles}
                maxLength="13"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label htmlFor="showRating" />
              <Input
                type="select"
                name="showRating"
                value={showRating}
                onChange={(e) => setShowRating(e.target.value)}
                placeholder="Shows Rating"
                style={myStyles}
              >
                <option value="">Select a Rating</option>
                <option value="Concert">Concert</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label htmlFor="myRating" />
              <Input
                name="myRating"
                value={myRating}
                onChange={(e) => setMyRating(e.target.value)}
                placeholder="My Rating/10"
                style={myStyles}
                maxLength="2"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button
          type="submit"
          style={{
            backgroundColor: "#1f2833",
            borderColor: "#d2553f",
            height: "auto",
            color: "#ffffff",
            borderRadius: "8px",
            textAlign: "center",
            textDecoration: "none",
            fontSize: "15px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            marginTop: "7px",
          }}
        >
          Click to submit
        </Button>
      </Form>
    </div>
  );
};

export default RatingCreate;
