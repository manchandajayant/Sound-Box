import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { showOneSpace } from "../Store/actions/spaceActions";
import { useSelector, useDispatch } from "react-redux";
import P5sketchComponent from "./P5sketchComponent";
import { Link } from "react-router-dom";
import "../App.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  description: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    textAlign: "justify",
    textJustify: "inter-word ",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  title: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  link: {
    color: "black",
    textDecoration: "inherit",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
}));
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
