import React, { useEffect } from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../p5sketch/sketch";
import { showAllSpaces } from "../Store/actions/spaceActions";
import "../CSS/sketchComponent.css";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    color: "black",
    textDecoration: "inherit",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));
const P5sketchComponent = () => {
  const spaces = useSelector((state) => state.spaces);
  const space = useSelector((state) => state.space);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAllSpaces());
  }, [dispatch]);

  return (
    <div className="sketch">
      <Typography variant="subtitle1" className={classes.description}>
        Please Use Headphones to avoid a feedback loop
      </Typography>
      <P5Wrapper sketch={sketch} space={space} />
    </div>
  );
};

export default P5sketchComponent;
