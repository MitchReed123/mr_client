import React, { useState } from "react";
import {
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import APIURL from "../helpers/environment";

const ProfilesEdit = (props) => {
  const [editUserBio, setEditUserBio] = useState(props.profileToUpdate.userBio);
  const [editFavArtistOne, setEditFavArtistOne] = useState(
    props.profileToUpdate.favArtistOne
  );
  const [editFavArtistTwo, setEditFavArtistTwo] = useState(
    props.profileToUpdate.favArtistTwo
  );
  const [editFavArtistThree, setEditFavArtistThree] = useState(
    props.profileToUpdate.favArtistThree
  );
  const [editFavGenreOne, setEditFavGenreOne] = useState(
    props.profileToUpdate.favGenreOne
  );
  const [editFavGenreTwo, setEditFavGenreTwo] = useState(
    props.profileToUpdate.favGenreTwo
  );
  const [editFavGenreThree, setEditFavGenreThree] = useState(
    props.profileToUpdate.favGenreThree
  );

  console.log(props.profileToUpdate);

  const profileUpdate = (event, profile) => {
    event.preventDefault();
    fetch(`${APIURL}/profile/${props.profileToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        profile: {
          userBio: editUserBio,
          favArtistOne: editFavArtistOne,
          favArtistTwo: editFavArtistTwo,
          favArtistThree: editFavArtistThree,
          favGenreOne: editFavGenreOne,
          favGenreTwo: editFavGenreTwo,
          favGenreThree: editFavGenreThree,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      console.log(res);
      props.fetchProfiles();
      props.updateOff();
    });
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

  const bioStyle = {
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
        Edit Your Profile
      </ModalHeader>
      <ModalBody style={{ backgroundColor: "#45a29e" }}>
        <Form onSubmit={profileUpdate}>
          <FormGroup>
            <Label htmlFor="userbio" id="editLabel">
              Edit Your Bio
            </Label>
            <Input
              name="userbio"
              value={editUserBio}
              placeholder="Your Bio"
              onChange={(e) => setEditUserBio(e.target.value)}
              style={bioStyle}
              maxLength="100"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favArtistOne" id="editLabel">
              Edit First Favorite Artist
            </Label>
            <Input
              name="favArtistOne"
              value={editFavArtistOne}
              placeholder="First Favorite Artist"
              onChange={(e) => setEditFavArtistOne(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favArtistTwo" id="editLabel">
              Edit Second Favorite Artist
            </Label>
            <Input
              name="favArtistTwo"
              value={editFavArtistTwo}
              placeholder="Second Favorite Artist"
              onChange={(e) => setEditFavArtistTwo(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favArtistThree" id="editLabel">
              Edit Third Favorite Artist
            </Label>
            <Input
              name="favArtistThree"
              value={editFavArtistThree}
              placeholder="Third Favorite Artist"
              onChange={(e) => setEditFavArtistThree(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favGenreOne" id="editLabel">
              Edit First Favorite Movie Genre
            </Label>
            <Input
              name="favGenreOne"
              value={editFavGenreOne}
              placeholder="First Favorite Genre"
              onChange={(e) => setEditFavGenreOne(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favGenreTwo" id="editLabel">
              Edit Second Favorite Movie Genre
            </Label>
            <Input
              name="favGenreTwo"
              value={editFavGenreTwo}
              placeholder="Second Favorite Genre"
              onChange={(e) => setEditFavGenreTwo(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="favgenreThree" id="editLabel">
              Edit Third Favorite Movie Genre
            </Label>
            <Input
              name="favGenreThree"
              value={editFavGenreThree}
              placeholder="Third Favorite Genre"
              onChange={(e) => setEditFavGenreThree(e.target.value)}
              style={myStyles}
              maxLength="22"
            />
          </FormGroup>
          <Button
            type="submit"
            id="editButton"
            style={{
              borderColor: "#6ec0c3",
              backgroundColor: "#1f2833",
              borderRadius: "8px",
              borderWidth: "2px",
              marginLeft: "32%",
            }}
          >
            Update Your Profile!
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ProfilesEdit;
