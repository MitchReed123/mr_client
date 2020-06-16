import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "#1F2833",
  },
});
const SiteBar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  function logoutBtn() {
    const logOut = () => {
      history.push("/");
      props.clickLogout();
    };

    return localStorage.getItem("token") === null ? (
      ""
    ) : (
      <Button
        onClick={logOut}
        color="inherit"
        id="navLog"
        style={{ fontSize: "20px" }}
      >
        <font color="#45A29E">Lo</font>
        <font color="#d2553f">go</font>
        <font color="#45A29E">ut</font>
      </Button>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.color}>
          <Typography variant="h6" id="navTitle" className={classes.title}>
            <font color="#45A29E">Movie</font>
            <font color="#d2553f">/</font>
            <font color="#45A29E">Concert Rating</font>
          </Typography>
          {/* <Button onClick={props.clickLogout} color="inherit" id="navLog">
            Logout
          </Button> */}
          {logoutBtn()}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default SiteBar;
