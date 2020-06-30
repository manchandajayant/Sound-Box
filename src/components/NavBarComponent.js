import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import { Button } from "@material-ui/core";

export class NavBarComponent extends Component {
  render() {
    console.log("this", this.props);
    const log = !this.props.user.auth ? (
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
      <Typography>{this.props.user.userName}</Typography>
    );
    return (
      <div>
        <Navbar
          collapseOnSelect
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
                border: "solid 0.5px black",
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
                to="/"
              >
                Hera's Wrath
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
                      Create a New Space
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps)(NavBarComponent);
