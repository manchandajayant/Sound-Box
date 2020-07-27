import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { showOneSpace } from "../../Store/actions/spaceActions";
import { useSelector, useDispatch } from "react-redux";
import P5sketchComponent from "../p5SketchComponent/p5sketchComponent";
import useStyles from "./spaceDetailStyle";
import "../App.css";

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
        <br />
        <Typography variant="h5" className={classes.description}>
          {space.description}
        </Typography>
        <br />
        <img
          src={space.url}
          style={{
            maxWidth: "100%",
            Height: "auto",
            filter: "grayscale(20%)",
          }}
          alt="loading"
        />

        <P5sketchComponent />
        <Typography variant="h6">
          <Link
            className={classes.link}
            style={{}}
            to={`/spaces/${space.id}/audiofiles`}
          >
            AMBIENT RECORDINGS
          </Link>
        </Typography>
      </div>
    );
  } else {
    return (
      <Typography
        variant="h3"
        style={{ fontFamily: "Dosis, sans-serif", letterSpacing: "5px" }}
      >
        Loading....
      </Typography>
    );
  }
};

export default SpaceDetailContainer;
