import React from "react";
import ReactPlayer from "react-player";
import { Typography, Container, Grid, Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

import useStyles from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" className={classes.About}>
        About
      </Typography>
      <Typography variant="h6" className={classes.description}>
        I am super enthusiastic about audio and sound, and using it for
        interactive and experiential purposes. I made this during the corona
        lockdown and as such had impulse response data available for very few
        places, mostly through openair library recorded by researchers at
        university of york. As things get normal i intend to record impulse
        responses for more sites and catalogue them. Incase you you want to
        contribute with any impulse response data for a space, then you could
        mail me and i will accredit you here.
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
      </Typography>
      <Container className={classes.container}>
        <Grid className={classes.root}>
          <ReactPlayer url="https://youtu.be/1egKAtC16e8" />
        </Grid>
      </Container>
      <Typography className={classes.Impulse}>
        Impulse Responses from{" "}
        <Link href="#" onClick={() => window.open("https://openairlib.net")}>
          openairlib
        </Link>
      </Typography>
      <Typography className={classes.Impulse}>
        <a
          href="http://creativecommons.org/licenses/by-sa/3.0/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.anchor}
        >
          <img
            alt="Creative Commons License"
            style={{ borderWidth: "0", height: "auto", width: "40px" }}
            src="https://i.creativecommons.org/l/by-sa/3.0/88x31.png"
          />
        </a>
        Licensed Under
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">
          {" "}
          A Creative Commons Attribution-ShareAlike 3.0 Unported License
        </a>
      </Typography>
      <Typography variant="h6" className={classes.Impulse}>
        Get in touch
      </Typography>
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
      <Typography className={classes.Impulse}>maanjayant@gmail.com</Typography>{" "}
      <Button onClick={() => window.open("https://jayantmanchanda.com/")}>
        {" "}
        <Typography className={classes.Impulse}>jayantmanchanda.com</Typography>
      </Button>
    </div>
  );
};

export default About;