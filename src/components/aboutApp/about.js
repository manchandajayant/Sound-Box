import React from "react";
import ReactPlayer from "react-player";

import {
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import useStyles from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" className={classes.about}>
        About
      </Typography>
      <Typography variant="h6" className={classes.description}>
        I am super enthusiastic about audio and sound, and using it for
        interactive and experiential purposes. I made this during the corona
        virus lockdown and as such had impulse response data available for very
        few places, mostly through openair library recorded by researchers at
        university of york. As things get normal, I intend to record impulse
        responses for more sites and catalogue them. I am currently in the
        process of creating a bigger database for it, so that recordings can be
        shared by audiophiles across the pond.
        <br />
        <br />
        If you are interested in creating your own impulse responses, here is
        one of my favorite youtuber's{" "}
        <Link href="https://www.youtube.com/user/Hainbach101" target="_blank">
          HainBach
        </Link>{" "}
        explaining the process.
      </Typography>
      <Container className={classes.container}>
        <Grid className={classes.grid}>
          <ReactPlayer url="https://youtu.be/1egKAtC16e8" />
        </Grid>
      </Container>
      <Typography className={classes.impulse}>
        Impulse Responses from{" "}
        <Link href="https://openairlib.net" target="_blank">
          openairlib
        </Link>
      </Typography>
      <Typography className={classes.impulse}>
        <a
          href="http://creativecommons.org/licenses/by-sa/3.0/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.anchor}
        >
          <img
            alt="Creative Commons License"
            className={classes.image}
            src="https://i.creativecommons.org/l/by-sa/3.0/88x31.png"
          />
        </a>
        Licensed Under
        <a
          rel="noopener noreferrer"
          href="http://creativecommons.org/licenses/by-sa/3.0/"
          target="_blank"
        >
          {" "}
          A Creative Commons Attribution-ShareAlike 3.0 Unported License
        </a>
      </Typography>
      <Typography variant="h6" className={classes.impulse}>
        Get in touch
      </Typography>
      <IconButton aria-label="Linkedin.com">
        <Link
          href="https://www.linkedin.com/in/jayantmanchanda/"
          target="_blank"
          className={classes.linkedin}
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </IconButton>
      <IconButton aria-label="Linkedin.com">
        <Link
          href="https://github.com/manchandajayant"
          target="_blank"
          className={classes.github}
        >
          <GitHubIcon fontSize="large" />
        </Link>
      </IconButton>
      <Typography className={classes.impulse}>maanjayant@gmail.com</Typography>{" "}
      <Typography className={classes.impulse}>
        <Link
          target="_blank"
          href="https://jayantmanchanda.com/"
          className={classes.website}
        >
          {" "}
          jayantmanchanda.com
        </Link>
      </Typography>
    </div>
  );
};

export default About;
