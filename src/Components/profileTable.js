import React from "react";
import { Table, Button, Row, Col, Container, Label } from "reactstrap";
import APIURL from "../helpers/environment";

const ProfileTable = (props) => {
  const deleteProfile = (profile) => {
    console.log("Profile id", profile.id);

    fetch(`${APIURL}/profile/${profile.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchProfiles());
  };

  const ratingMapper = () => {
    return props.ratings.map((rating, index) => {
      return (
        <tr key={index}>
          {/* <th scope="row">{rating.id}</th> */}
          <td
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {rating.showName}
          </td>
          <td
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {rating.showType}
          </td>
          <td
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {rating.showRating}
          </td>
          <td
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {rating.myRating}
          </td>
        </tr>
      );
    });
  };

  // console.log(props.profiles);
  const profileMapper = () => {
    console.log("Profiles test", props.profiles);
    return props.profiles.map((profile, index) => {
      return (
        <div>
          <br />
          <Row>
            <Col md="4" style={{ width: "100%", height: "auto" }}>
              <Container
                style={{
                  border: "#9e3f2e solid 3px",
                  // maxWidth: "300px",
                  borderRadius: "5px",
                  height: "175px",
                  overflow: "hidden",
                  overflowWrap: "break-work",
                  wordWrap: "break-word",
                  hyphens: "auto",
                  textAlign: "center",
                }}
              >
                <Label
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  User Bio
                </Label>
                <p style={{ color: "white", fontWeight: "bold" }}>
                  {profile.userBio}
                </p>
              </Container>
            </Col>
            <Col md="4" style={{ width: "100%", float: "center" }}>
              <div
                style={{
                  border: "#9e3f2e solid 3px",
                  // maxWidth: "300px",
                  borderRadius: "5px",
                  height: "175px",
                  textAlign: "center",
                }}
              >
                <Label
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Favorite Artists
                </Label>
                <h4
                  style={{
                    padding: "5px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  {profile.favArtistOne}
                </h4>
                <h4
                  style={{
                    padding: "5px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  {profile.favArtistTwo}
                </h4>
                <h4
                  style={{
                    padding: "5px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  {profile.favArtistThree}
                </h4>
              </div>
            </Col>
            <Col md="4" style={{ width: "100%", float: "right" }}>
              <div
                style={{
                  border: "#9e3f2e solid 3px",
                  // maxWidth: "300px",
                  borderRadius: "5px",
                  height: "175px",
                  textAlign: "center",
                }}
              >
                <Label
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Favorite Movie Genres
                </Label>
                <h4
                  style={{
                    padding: "5px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  {profile.favGenreOne}
                </h4>
                <h4
                  style={{
                    padding: "5px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  {profile.favGenreTwo}
                </h4>
                <h4
                  style={{
                    padding: "5px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  {profile.favGenreThree}
                </h4>
              </div>
            </Col>
          </Row>
          <tr key={index}>
            <td>
              <Button
                style={{
                  backgroundColor: "#66FCF1",
                  color: "black",
                  borderColor: "#1F2833",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
                onClick={() => {
                  props.editUpdateProfile(profile);
                  props.updateOn();
                }}
              >
                Update
              </Button>
              {/* <Button
                style={{
                  backgroundColor: "#1F2833",
                  color: "white",
                  margin: "3px",
                  borderColor: "#f5f2d0",
                }}
                onClick={() => {
                  deleteProfile(profile);
                }}
              >
                Delete
              </Button> */}
              <br />
            </td>
          </tr>
        </div>
      );
    });
  };

  return (
    <>
      {/* i should be able to do some inline styling to make it so it only shows a certain amount of data without having to scroll. overflow: "scroll" and height: "350px or whatever will look the best" i just want to show 3 originally until it start scrolling, i will have to do css to the scroll bar so its not ugly as fuck  */}
      <Table>
        <thead>
          <tr style={{ textAlign: "center" }}>
            {/* <th style={{ color: "#ffffff" }}>#</th> */}
            <th
              style={{
                padding: "10px",
                color: "#000000",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Show Name
            </th>
            <th
              style={{
                padding: "10px",
                color: "#000000",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Show Type
            </th>
            <th
              style={{
                padding: "10px",
                color: "#000000",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Show Rating
            </th>
            <th
              style={{
                padding: "10px",
                color: "#000000",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              My Rating
            </th>
          </tr>
        </thead>
        <tbody style={{ padding: "10px", color: "#ffffff" }}>
          {ratingMapper()}
        </tbody>
      </Table>
      {profileMapper()}
    </>
  );
};

export default ProfileTable;
