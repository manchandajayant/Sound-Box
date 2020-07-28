import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";

const LandingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.container}>
        <Typography variant="h3" className={classes.grid}>
          verber
        </Typography>
      </Grid>

      <Typography variant="h5" className={classes.Typo}>
        Verber is an application based on experiencing historical sites and
        spaces through sound simulation. You can choose from the available
        catalogue, or you can add to the catalogue by creating your own space
        with an available Impulse Response.The app connects to your microphone
        and gives you an impression of being in a space while being at your
        computer.The application also offers the users to upload Ambient/Field
        Recording Data related to the place.
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
