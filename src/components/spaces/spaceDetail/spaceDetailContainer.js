import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { showOneSpace } from "../../../Store/actions/spaceActions";

import useStyles from "./stylesForSpace";
import WebAudioComponent from "../../p5SketchComponent/WebAudioComponent";

export const SpaceDetailContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const space = useSelector((state) => state.space);

  useEffect(() => {
    dispatch(showOneSpace(id));
  }, [id, dispatch]);

  if (space) {
    return (
      <div>
        <Typography variant="h2" className={classes.title}>
          {space.name}
        </Typography>

        <Typography variant="h5" className={classes.description}>
          {space.description}
        </Typography>

        <img src={space.url} className={classes.image} alt="loading" />

        <WebAudioComponent />
        <Typography variant="h6" className={classes.typo}>
          <Link className={classes.link} to={`/spaces/${space.id}/audiofiles`}>
            AMBIENT RECORDINGS
          </Link>
        </Typography>
      </div>
    );
  } else {
    return (
      <Typography variant="h3" className={classes.typo}>
        Loading....
      </Typography>
    );
  }
};

export default SpaceDetailContainer;
