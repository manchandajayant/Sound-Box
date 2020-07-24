import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Paper, Typography, Button } from "@material-ui/core";
import { Navbar, Nav } from "react-bootstrap";

import "./navbar.css";

export const NavBarComponent = () => {
  const user = useSelector((state) => state.users);

  const log = !user.auth ? (
    <Link to="/login" className="link">
      Login
    </Link>
  ) : (
    <Typography className="typo">{user.userName}</Typography>
  );
  return (
    <div>
      <Paper elevation={2}>
        <Navbar collapseOnSelect sticky="top" expand="lg" className="navbar">
          <Navbar.Brand>
            <Typography className="brand">
              {" "}
              <Link className="link-brand" to="/">
                VERBER
              </Link>
            </Typography>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="item">
                <Link to="/spaces" className="link">
                  Spaces
                </Link>
              </Nav.Item>
              <Nav.Item className="item">
                <Link to="/newspace" className="link">
                  Add a Space
                </Link>
              </Nav.Item>

              <Nav.Item className="item">
                <Link to="/about" className="link">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item className="item">
                <Fragment>{log}</Fragment>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Paper>
    </div>
  );
};

export default NavBarComponent;
