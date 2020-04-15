import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default class About extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />

        <Typography>
          I made this app as a part of my portfolio project at codaisseur, where
          i completed an 11 week intesive bootcamp. I am super enthusiastic
          about audio and sound.
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <LinkedInIcon />
      </div>
    );
  }
}
