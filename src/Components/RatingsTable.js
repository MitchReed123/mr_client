import React from "react";
import { Table, Button } from "reactstrap";
import RatingCreate from "../Components/RatingsCreate";

const RatingTable = (props) => {
  console.log(props.ratings);
  const deleteRating = (rating) => {
    fetch(`http://localhost:3000/rating/${rating.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchRatings());
  };

  const ratingMapper = () => {
    return props.ratings.map((rating, index) => {
      return (
        <tr key={index}>
          {/* <th scope="row">{rating.id}</th> */}
          <td>{rating.showName}</td>
          <td>{rating.showType}</td>
          <td>{rating.showRating}</td>
          <td>{rating.myRating}</td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateRating(rating);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteRating(rating);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <br />
      <h3 style={{ color: "#000000" }}>All Ratings</h3>
      <hr />
      <Table>
        <thead>
          <tr>
            {/* <th style={{ color: "#ffffff" }}>#</th> */}
            <th style={{ padding: "10px", color: "#ffffff" }}>Show Name</th>
            <th style={{ padding: "10px", color: "#ffffff" }}>Show Type</th>
            <th style={{ padding: "10px", color: "#ffffff" }}>Show Rating</th>
            <th style={{ padding: "10px", color: "#ffffff" }}>My Rating</th>
            <th style={{ padding: "10px", color: "#ffffff" }}>Update/Delete</th>
          </tr>
        </thead>
        <tbody style={{ padding: "10px", color: "#ffffff" }}>
          {ratingMapper()}
        </tbody>
      </Table>
    </>
  );
};

export default RatingTable;
