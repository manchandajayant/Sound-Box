import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { showAllSpaces } from "../actions/spaceActions";
// import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import ReactMapGl from "react-map-gl";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Homepage = () => {
  const dispatch = useDispatch();
  const [viewPort, setviewPort] = useState({
    latitude: 45.11,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  const spaces = useSelector((state) => state.spaces);
  const classes = useStyles();
  useEffect(() => {
    dispatch(showAllSpaces());
  }, [dispatch]);
  console.log("ssp", spaces);

  if (!spaces) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>Map</h1>
      </div>
      // <div>
      //   <Typography
      //     variant="h4"
      //     style={{
      //       color: "black",
      //       fontWeight: "2px",
      //       fontFamily: "IBM Plex Serif,serif",
      //     }}
      //   >
      //     SPACES
      //   </Typography>
      //   {spaces.map((space, index) => (
      //     <div key={index} className={classes.root}>
      //       <Grid item xs={12} sm={6}>
      //         <img
      //           src={space.url}
      //           alt="Not loading"
      //           style={{
      //             filter: "sepia(100%)",
      //             height: "auto",
      //             width: "100%",
      //             maxWidth: "500px",
      //           }}
      //           className={classes.paper}
      //         />
      //       </Grid>{" "}
      //       <Typography>
      //         <Link to={`/spaces/${space.id}`}>{space.name}</Link>
      //       </Typography>
      //     </div>
      //   ))}{" "}
      // </div>
    );
  }
};

export default Homepage;
