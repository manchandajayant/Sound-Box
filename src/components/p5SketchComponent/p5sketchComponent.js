import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import P5Wrapper from "react-p5-wrapper";

import { Typography } from "@material-ui/core";

import sketch from "../../p5sketch/sketch";
import { showAllSpaces } from "../../Store/actions/spaceActions";

import useStyles from "./styles";

const P5sketchComponent = () => {
  const spaces = useSelector((state) => state.spaces);
  const space = useSelector((state) => state.space);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAllSpaces());
  }, [dispatch]);

  return (
    <div className={classes.sketch}>
      <Typography variant="subtitle1" className={classes.description}>
        Please Use Headphones to avoid a feedback loop
      </Typography>
      <P5Wrapper sketch={sketch} space={space} />
    </div>
  );
};

export default P5sketchComponent;
