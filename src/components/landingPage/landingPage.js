import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.container}>
        <Typography variant="h3" className={classes.grid}>
          verber
        </Typography>
      </Grid>

      <Typography variant="h5" className={classes.Typo}>
        An app for sharing Impulse Responses and Ambient Recordings for
        architectural/non-architectural spaces and sites. The app allows you to
        experience and test the sound of these spaces using the impulse
        responses.
      </Typography>
      <Button>
        <Link to="/spaces" className={classes.Link}>
          <Typography variant="h4">START EXPLORING</Typography>
        </Link>
      </Button>
    </div>
  );
};

export default LandingPage;
