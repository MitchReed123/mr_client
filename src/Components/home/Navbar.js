import React, { useState, Component } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  Button,
  Nav,
} from "reactstrap";

import "./Navbar.css";
import logo from "./assets/logo.png";

const SiteBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar className="NavStyle" light expanded="sm" style={{ height: "auto" }}>
      <NavbarBrand href="/">
        <img src={logo} alt="logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} className="workplease">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button onClick={props.clickLogout}>Logout</Button>
            <Button>My Profile</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default SiteBar;
