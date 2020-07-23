import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Paper, Typography } from "@material-ui/core";
import { Navbar, Nav } from "react-bootstrap";

import "./navbar.css";

export const NavBarComponent = () => {
  const user = useSelector((state) => state.users);

  const log = !user.auth ? (
    <Link
      to="/login"
      style={{
        color: "black",
      }}
    >
      <Typography className="typo">Login</Typography>
    </Link>
  ) : (
    <Typography>{user.userName}</Typography>
  );
  return (
    <div>
      <Paper elevation={2}>
        <Navbar collapseOnSelect sticky="top" expand="lg" className="navbar">
          <Navbar.Brand>
            <Typography className="brand">
              {" "}
              <Link className="link" to="/">
                VERBER
              </Link>
            </Typography>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="item">
                <Link to="/spaces" className="link">
                  <Typography className="typo">Spaces</Typography>
                </Link>
              </Nav.Item>
              <Nav.Item className="item">
                <Link
                  to="/newspace"
                  style={{
                    color: "black",
                  }}
                >
                  <Typography className="typo">Add a Space</Typography>
                </Link>
              </Nav.Item>

              <Nav.Item className="item">
                <Link to="/about" className="link">
                  <Typography className="typo">About</Typography>
                </Link>
              </Nav.Item>
              <Nav.Item className="item">
                <Link>{log}</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Paper>
    </div>
  );
};

export default NavBarComponent;
