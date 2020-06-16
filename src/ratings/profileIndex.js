import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "reactstrap";
import ProfilesEdit from "../Components/profileEdit";
import ProfileCreate from "../Components/profileCreate";
import APIURL from "../helpers/environment";
import ProfileTable from "../Components/profileTable";
import RatingsTable from "../Components/RatingsTable";

const ProfileIndex = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [profileToUpdate, setProfileToUpdate] = useState({});
  const [ratings, setRatings] = useState([]);
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

  const fetchProfiles = () => {
    console.log("App token", props.token);
    fetch(`${APIURL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((profileData) => {
        console.log("testing", profileData.profiles);
        setProfiles(profileData.profiles);
      });
  };

  const editUpdateRating = (rating) => {
    console.log(rating);
    setratingToWorkout(rating);
  };

  const editUpdateProfile = (profile) => {
    console.log(profile);
    setProfileToUpdate(profile);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    console.log("profile effect ran");
    fetchProfiles();
  }, []);

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
        <font color="#d2553f">
          {localStorage.getItem("username")}
          <font color="#45A29E">'</font>s
        </font>
        <font color="#45A29E"> Profile</font>
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

  function createProfile() {
    return profiles.length <= 0 ? (
      <ProfileCreate
        fetchProfiles={fetchProfiles}
        token={props.token}
        updateOff={updateOff}
      />
    ) : (
      ""
    );
  }

  return (
    <div>
      <br />
      {Welcoming()}
      <br />
      <Container className="test">
        <Row>
          <Col md="12">{createProfile()}</Col>
          <br />
          <Col md="12">
            <div>
              {profiles === undefined ? null : (
                <ProfileTable
                  ratings={ratings}
                  profiles={profiles}
                  editUpdateProfile={editUpdateProfile}
                  updateOn={updateOn}
                  fetchProfiles={fetchProfiles}
                  token={props.token}
                />
              )}
            </div>
          </Col>

          {updateActive ? (
            <ProfilesEdit
              profileToUpdate={profileToUpdate}
              updateOff={updateOff}
              token={props.token}
              fetchProfiles={fetchProfiles}
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

export default ProfileIndex;
