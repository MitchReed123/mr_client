import React, { useState } from "react";
import APIURL from "../helpers/environment";
// import { FormGroup } from "@material-ui/core";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  ModalHeader,
  ModalBody,
  Modal,
} from "reactstrap";

const ProfileCreate = (props) => {
  const [userBio, setUserBio] = useState("");
  const [favArtistOne, setFavArtistOne] = useState("");
  const [favArtistTwo, setFavArtistTwo] = useState("");
  const [favArtistThree, setFavArtistThree] = useState("");
  const [favGenreOne, setFavGenreOne] = useState("");
  const [favGenreTwo, setFavGenreTwo] = useState("");
  const [favGenreThree, setFavGenreThree] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/profile`, {
      method: "POST",
      body: JSON.stringify({
        userBio: userBio,
        favArtistOne: favArtistOne,
        favArtistTwo: favArtistTwo,
        favArtistThree: favArtistThree,
        favGenreOne: favGenreOne,
        favGenreTwo: favGenreTwo,
        favGenreThree: favGenreThree,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
    })
      .then((res) => res.json())
      .then((profileData) => {
        console.log(profileData);
        setUserBio("");
        setFavGenreOne("");
        setFavGenreTwo("");
        setFavGenreThree("");
        setFavArtistOne("");
        setFavArtistTwo("");
        setFavArtistThree("");
        props.fetchProfiles();
        props.updateOff();
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
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "200px",
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader style={{ backgroundColor: "#45a29e", color: "white" }}>
        Create Your Profile!
      </ModalHeader>
      <ModalBody style={{ backgroundColor: "#45a29e" }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="userBio" id="editLabel">
              My Bio
            </Label>
            <Input
              name="userBio"
              value={userBio}
              placeholder="My bio"
              onChange={(e) => setUserBio(e.target.value)}
              maxLength="100"
              style={myStyles}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favArtistOne" id="editLabel">
              Favorite Artist #1
            </Label>
            <Input
              name="favArtistOne"
              value={favArtistOne}
              placeholder="Fav artist #1"
              onChange={(e) => setFavArtistOne(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favArtistTwo" id="editLabel">
              Favorite Artist #2
            </Label>
            <Input
              name="favArtistTwo"
              value={favArtistTwo}
              placeholder="Fav Artist #2"
              onChange={(e) => setFavArtistTwo(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favArtistThree" id="editLabel">
              Favorite Artist #3
            </Label>
            <Input
              name="favArtistThree"
              value={favArtistThree}
              placeholder="Fav Artist #3"
              onChange={(e) => setFavArtistThree(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favGenreOne" id="editLabel">
              Favorite Movie Genre #1
            </Label>
            <Input
              name="favGenreOne"
              value={favGenreOne}
              placeholder="Fav Genre #1"
              onChange={(e) => setFavGenreOne(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favGenreTwo" id="editLabel">
              Favorite Movie Genre #2
            </Label>
            <Input
              name="favGenreTwo"
              value={favGenreTwo}
              placeholder="Fav Genre #2"
              onChange={(e) => setFavGenreTwo(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favGenreThree" id="editLabel">
              Favorite Movie Genre #3
            </Label>
            <Input
              name="favGenreThree"
              value={favGenreThree}
              placeholder="Fav Genre #3"
              onChange={(e) => setFavGenreThree(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <Button
            type="submit"
            style={{
              borderColor: "#6ec0c3",
              backgroundColor: "#1f2833",
              borderRadius: "8px",
              borderWidth: "2px",
              marginLeft: "36%",
            }}
          >
            Create Profile
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ProfileCreate;
