import React, { useState, useEffect, useReducer } from "react";
import { Container, Row, Col } from "reactstrap";
import RatingsTable from "../Components/RatingsTable";
import RatingsEdit from "../Components/RatingsEdit";
import RatingCreate from "../Components/RatingsCreate";
import Sitebar from "../Components/home/Navbar";
import "./ratingsIndex.css";

const RatingsIndex = (props) => {
  const [ratings, setRatings] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [ratingToUpdate, setratingToWorkout] = useState({});

  const fetchRatings = () => {
    fetch("http://localhost:3000/rating", {
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

  return (
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
  );
};

export default RatingsIndex;
