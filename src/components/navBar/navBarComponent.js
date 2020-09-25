import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Paper, Typography } from "@material-ui/core";
import { Navbar, Nav } from "react-bootstrap";

import "./navbar.css";

export const NavBarComponent = () => {
  const user = useSelector((state) => state.users);
  console.log(user);
  const log = !localStorage.jwt ? (
    <Link to="/login" className="link">
      Login
    </Link>
  ) : (
    <span className="typo">{user.userName}Log Out</span>
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
              <Nav.Item>
                <Typography className="nav-item">
                  <Link to="/spaces" className="link">
                    Spaces
                  </Link>
                </Typography>
              </Nav.Item>
              <Nav.Item>
                <Typography className="nav-item">
                  <Link to="/newspace" className="link">
                    Add a Space
                  </Link>
                </Typography>
              </Nav.Item>

              <Nav.Item>
                <Typography className="nav-item">
                  <Fragment>{log}</Fragment>
                </Typography>
              </Nav.Item>
              <Nav.Item>
                <Typography className="nav-item">
                  <Link to="/about" className="link">
                    About
                  </Link>
                </Typography>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Paper>
    </div>
  );
};

export default NavBarComponent;
