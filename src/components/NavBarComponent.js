import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Button, Paper } from "@material-ui/core";

export const NavBarComponent = () => {
  const user = useSelector((state) => state.users);

  const log = !user.auth ? (
    <Link
      to="/login"
      style={{
        color: "black",
      }}
    >
      <Typography style={{ fontFamily: "Dosis, sans-serif" }}>Login</Typography>
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
                fontFamily: "Dosis, sans-serif",
              }}
            >
              {" "}
              <Link
                style={{
                  color: "black",
                  textDecoration: "inherit",
                  letterSpacing: "3px",
                }}
                to="/"
              >
                VERBER
              </Link>
            </Typography>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item style={{ marginRight: "11px" }}>
                <Link
                  to="/spaces"
                  style={{
                    color: "black",
                  }}
                >
                  <Button>
                    <Typography
                      style={{
                        fontFamily: "Dosis, sans-serif",
                        letterSpacing: "2px",
                      }}
                    >
                      Spaces
                    </Typography>
                  </Button>
                </Link>
              </Nav.Item>
              <Nav.Item style={{ marginRight: "10px" }}>
                <Link
                  to="/newspace"
                  style={{
                    color: "black",
                  }}
                >
                  <Button>
                    <Typography style={{ fontFamily: "Dosis, sans-serif" }}>
                      Add a Space
                    </Typography>
                  </Button>
                </Link>
              </Nav.Item>

              <Nav.Item style={{ marginRight: "10px" }}>
                <Link
                  to="/about"
                  style={{
                    color: "black",
                  }}
                >
                  <Button>
                    <Typography style={{ fontFamily: "Dosis, sans-serif" }}>
                      About
                    </Typography>
                  </Button>
                </Link>
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
