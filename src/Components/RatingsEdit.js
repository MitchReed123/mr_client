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

const RatingsEdit = (props) => {
  const [editshowName, setEditShowName] = useState(
    props.ratingToUpdate.showName
  );
  const [editshowType, setEditShowType] = useState(
    props.ratingToUpdate.showType
  );
  const [editshowRating, setEditShowRating] = useState(
    props.ratingToUpdate.showRating
  );
  const [editmyRating, setEditMyRating] = useState(
    props.ratingToUpdate.myRating
  );

  console.log(props.ratingToUpdate);

  const ratingUpdate = (event, ratings) => {
    event.preventDefault();
    fetch(`${APIURL}/rating/${props.ratingToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        rating: {
          showName: editshowName,
          showType: editshowType,
          showRating: editshowRating,
          myRating: editmyRating,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchRatings();
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

  return (
    <Modal isOpen={true}>
      <ModalHeader style={{ backgroundColor: "#45a29e", color: "white" }}>
        Edit a Rating
      </ModalHeader>
      <ModalBody style={{ backgroundColor: "#45a29e" }}>
        <Form onSubmit={ratingUpdate}>
          <FormGroup>
            <Label htmlFor="showName" id="editLabel" style={{ color: "White" }}>
              Edit Show Name
            </Label>
            <Input
              name="showName"
              value={editshowName}
              placeholder="Show Name"
              onChange={(e) => setEditShowName(e.target.value)}
              style={myStyles}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="showType" id="editLabel" style={{ color: "White" }}>
              Edit Show Type
            </Label>
            <Input
              name="showType"
              value={editshowType}
              placeholder="Show Type"
              onChange={(e) => setEditShowType(e.target.value)}
              style={myStyles}
              maxLength="13"
            />
          </FormGroup>
          <FormGroup>
            <Label
              htmlFor="showRating"
              id="editLabel"
              style={{ color: "White" }}
            >
              Edit Show Rating
            </Label>
            <Input
              type="select"
              name="showRating"
              value={editshowRating}
              placeholder="Show Rating"
              onChange={(e) => setEditShowRating(e.target.value)}
              style={myStyles}
            >
              <option value="Concert">Concert</option>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="myRating" id="editLabel" style={{ color: "White" }}>
              My Rating
            </Label>
            <Input
              name="myRating"
              value={editmyRating}
              placeholder="My Rating"
              onChange={(e) => setEditMyRating(e.target.value)}
              style={myStyles}
            />
          </FormGroup>
          <Button
            type="submit"
            style={{
              borderColor: "#6ec0c3",
              backgroundColor: "#1f2833",
              borderRadius: "8px",
              borderWidth: "2px",
              marginLeft: "32%",
            }}
          >
            Update your Rating!
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default RatingsEdit;
