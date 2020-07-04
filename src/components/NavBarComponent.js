import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Button, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

export const NavBarComponent = () => {
  const user = useSelector((state) => state.users);

  const log = !user.auth ? (
    <Link
      to="/login"
      style={{
        color: "black",
      }}
    >
      <Typography style={{ fontFamily: "IBM Plex Serif,serif" }}>
        Login
      </Typography>
    </Link>
  ) : (
    <Typography>{user.userName}</Typography>
  );
  return (
    <div>
      <Paper elevation={2}>
        <Navbar
          collapseOnSelect
          sticky="top"
          expand="lg"
          style={{
            backgroundColor: "transparent",
            boxShadow:
              "0px 2px 4px -1px, rgba(0,0,0,0.2), 0px 4px 5px 0px, rgba(0,0,0,0.14), 0px 1px 10px 0px ,rgba(0,0,0,0.12)",
            border: "solid 1px rgba(255)",
          }}
        >
          <Navbar.Brand>
            <Typography
              style={{
                color: "white",
                marginRight: "20px",

                borderRadius: "2px",
                backgroundColor: "transparent",
                fontFamily: "IBM Plex Serif,serif",
              }}
            >
              {" "}
              <Link
                style={{
                  color: "black",
                  textDecoration: "inherit",
                }}
                to="/spaces"
              >
                VERBER
              </Link>
            </Typography>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item style={{ marginRight: "10px" }}>
                <Button>
                  <Link
                    to="/spaces"
                    style={{
                      color: "black",
                    }}
                  >
                    <Typography style={{ fontFamily: "IBM Plex Serif,serif" }}>
                      Spaces
                    </Typography>
                  </Link>
                </Button>
              </Nav.Item>
              <Nav.Item style={{ marginRight: "10px" }}>
                <Button>
                  <Link
                    to="/newspace"
                    style={{
                      color: "black",
                    }}
                  >
                    <Typography style={{ fontFamily: "IBM Plex Serif,serif" }}>
                      Add a Space
                    </Typography>
                  </Link>
                </Button>
              </Nav.Item>

              <Nav.Item style={{ marginRight: "10px" }}>
                <Button>
                  <Link
                    to="/about"
                    style={{
                      color: "black",
                    }}
                  >
                    <Typography style={{ fontFamily: "IBM Plex Serif,serif" }}>
                      About
                    </Typography>
                  </Link>
                </Button>
              </Nav.Item>
              <Nav.Item style={{ marginRight: "10px" }}>
                <Button>{log}</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Paper>
    </div>
  );
};

export default NavBarComponent;
