import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{ background: "rgba(240, 225, 220, 0.6)" }}
        >
          <ToolBar>
            <Typography
              style={{
                color: "black",
                marginRight: "20px",
                border: "solid 0.5px black",
                borderRadius: "2px",
                backgroundColor: "rgb(120, 141, 154)"
              }}
            >
              {" "}
              <Link
                style={{
                  color: "black",
                  textDecoration: "inherit"
                }}
                to="/"
              >
                v e r b e r
              </Link>
            </Typography>
            <Button style={{ color: "black" }}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "inherit"
                }}
                to="/spaces"
              >
                SPACES
              </Link>
            </Button>
            <Button>
              <Link
                style={{
                  color: "black",
                  textDecoration: "inherit"
                }}
                to="/newspace"
              >
                CREATE A NEW SPACE
              </Link>
            </Button>
            <Button style={{ marginLeft: "63%", paddingRight: "1%" }}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "inherit"
                }}
                to="/login"
              >
                Login
              </Link>
            </Button>
            <Button>
              <Link
                style={{
                  color: "black",
                  textDecoration: "inherit"
                }}
              >
                About
              </Link>
            </Button>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}
