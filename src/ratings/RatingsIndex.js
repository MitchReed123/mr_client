import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import RatingsTable from "../Components/RatingsTable";
import RatingsEdit from "../Components/RatingsEdit";
import RatingCreate from "../Components/RatingsCreate";
import "./ratingsIndex.css";
import APIURL from "../helpers/environment";

const RatingsIndex = (props) => {
  const [ratings, setRatings] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [ratingToUpdate, setratingToWorkout] = useState({});

  const fetchRatings = () => {
    fetch(`${APIURL}/rating`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
    })
      .then((res) => res.json())
      .then((ratingData) => {
        console.log(ratingData);
        setRatings(ratingData.ratings);
      });
  };

  const editUpdateRating = (rating) => {
    console.log(rating);
    setratingToWorkout(rating);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    console.log("effect ran");
    fetchRatings();
  }, []);

  function Welcoming() {
    return localStorage.getItem("message") === null ? (
      <h1 id="messages" style={{ textAlign: "center" }}>
        <font color="#45A29E">Sign up or Login to see your Ratings</font>
        <font color="#45A29E">!</font>
      </h1>
    ) : localStorage.getItem("message") === "user succesfully logged in" ? (
      <h1 id="messages" style={{ textAlign: "center" }}>
        <font color="#45A29E">Welcome Back, </font>
        <font color="#d2553f">{localStorage.getItem("username")}</font>
        <font color="#45A29E">!</font>
      </h1>
    ) : localStorage.getItem("message") === "user created" ? (
      <h1 id="messages" style={{ textAlign: "center" }}>
        <font color="#45A29E">Welcome, </font>
        <font color="#d2553f">{localStorage.getItem("username")}</font>
      </h1>
    ) : (
      "null"
    );
  }

  return (
    <div>
      {/* <h1 style={{ textAlign: "center", color: "white" }}>
        Welcome {localStorage.getItem("username")}!
        <font color="#45A29E">Welcome </font>
        <font color="#d2553f">{localStorage.getItem("username")}</font>
      </h1> */}
      {Welcoming()}
      <br />
      <Container className="test">
        <Row>
          <Col md="12">
            <RatingCreate fetchRatings={fetchRatings} token={props.token} />
          </Col>
          <Col md="12">
            <h2>
              <RatingsTable
                ratings={ratings}
                editUpdateRating={editUpdateRating}
                updateOn={updateOn}
                fetchRatings={fetchRatings}
                token={props.token}
                style={{ overflow: "auto" }}
              />
            </h2>
          </Col>
          {updateActive ? (
            <RatingsEdit
              ratingToUpdate={ratingToUpdate}
              updateOff={updateOff}
              token={props.token}
              fetchRatings={fetchRatings}
            />
          ) : (
            <></>
          )}
        </Row>
      </Container>
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

export default RatingsIndex;
