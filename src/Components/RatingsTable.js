import React from "react";
import { Table, Button } from "reactstrap";
import APIURL from "../helpers/environment";

const RatingTable = (props) => {
  console.log(props.ratings);
  const deleteRating = (rating) => {
    fetch(`${APIURL}/rating/${rating.id}`, {
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
        //if window.location.hostname === "/profile" ? (null) :(display buttons)
        <tr key={index}>
          {/* <th scope="row">{rating.id}</th> */}
          <td style={{ textAlign: "center" }}>{rating.showName}</td>
          <td style={{ textAlign: "center" }}>{rating.showType}</td>
          <td style={{ textAlign: "center" }}>{rating.showRating}</td>
          <td style={{ textAlign: "center" }}>{rating.myRating}</td>
          <td style={{ textAlign: "center" }}>
            <Button
              style={{
                backgroundColor: "#66FCF1",
                color: "black",
                borderColor: "#1F2833",
              }}
              onClick={() => {
                props.editUpdateRating(rating);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              style={{
                backgroundColor: "#1F2833",
                color: "white",
                margin: "3px",
                borderColor: "#f5f2d0",
              }}
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
      <h2 style={{ color: "#000000", textAlign: "center", margin: "15px" }}>
        All Ratings
      </h2>
      {/* <br /> */}
      <Table>
        <thead>
          <tr style={{ textAlign: "center" }}>
            {/* <th style={{ color: "#ffffff" }}>#</th> */}
            <th style={{ padding: "10px", color: "#000000" }}>Show Name</th>
            <th style={{ padding: "10px", color: "#000000" }}>Show Type</th>
            <th style={{ padding: "10px", color: "#000000" }}>Show Rating</th>
            <th style={{ padding: "10px", color: "#000000" }}>My Rating</th>
            <th style={{ padding: "10px", color: "#000000" }}>Update/Delete</th>
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
