import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Typography variant="h1">V e r b e r</Typography>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h4">
          verber is an application based on expereciencing spaces and places
          through sound simulation. You can choose from the avaiable catalogue,
          or you can add to the catalogue by creating your own space with an
          Impulse Response. <br />
          The application also offers the users to upload Ambient/Field
          Recording Data.
          <br />
          <br />
          <br />
          <br />
          <Button>
            <Link
              to="/spaces"
              style={{
                color: "black",
                textDecoration: "inherit",
                fontSize: "40px"
              }}
            >
              START EXPLORING
            </Link>
          </Button>
        </Typography>
      </div>
    );
  }
}
