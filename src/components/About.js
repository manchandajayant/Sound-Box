import React, { Component } from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ReactPlayer from "react-player";
import { withStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
};
export class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h4">About</Typography>
        <br />
        <br />
        <br />

        <Typography>
          I am super enthusiastic about audio and sound, and using it for
          experiential purposes.This application was made as a part of my final
          project at a coding bootcamp. You can email me incase you are
          interested in the resources i used.
          <br />
          <br />
          If you are interested in creating your own impulse responses, here is
          one of my favorite youtuber's{" "}
          <Link
            href="#"
            onClick={() =>
              window.open("https://www.youtube.com/user/Hainbach101")
            }
          >
            HainBach
          </Link>{" "}
          explaining the process.
          <br />
        </Typography>
        <br />
        <br />
        <Container>
          <Grid className={classes.root}>
            <ReactPlayer url="https://youtu.be/1egKAtC16e8" />
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Typography>
          Impulse Responses from{" "}
          <Link href="#" onClick={() => window.open("https://openairlib.net")}>
            openairlib
          </Link>
        </Typography>
        <br />
        <br />
        <Typography variant="h6">Get in touch</Typography>
        <IconButton
          aria-label="Linkedin.com"
          onClick={() =>
            window.open("https://www.linkedin.com/in/jayantmanchanda/")
          }
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Linkedin.com"
          onClick={() => window.open("https://github.com/manchandajayant")}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <br />

        <AlternateEmailIcon fontSize="large" />
        <Typography>maanjayant@gmail.com</Typography>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
