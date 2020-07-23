import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { showOneSpace } from "../../Store/actions/spaceActions";
import P5sketchComponent from "../p5SketchComponent/p5sketchComponent";

import useStyles from "./stylesForSpace";

export const SpaceDetailContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const space = useSelector((state) => state.space);
  const user = useSelector((state) => state.user);
  const recordings = useSelector((state) => state.recordings);

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

        <P5sketchComponent />
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
