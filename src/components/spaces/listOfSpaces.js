import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import {
  Grid,
  Paper,
  Typography,
  LinearProgress,
  useMediaQuery,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { showAllSpaces } from "../../Store/actions/spaceActions";
import "../../CSS/Homepage.css";

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#ffffff",
  },
  barColorPrimary: {
    backgroundColor: "rgba(100,100,100)",
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  load: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  bar: {
    paddingTop: "15%",
  },
  heading: {
    fontFamily: "Dosis, sans-serif",
    paddingBottom: "10px",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
}));

const iconSpace = new Icon({
  iconUrl: "/pin.png",
  iconSize: [20, 20],
});

const Homepage = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  const zoom = matches ? 2.5 : 4;
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.spaces);
  const [activeSpace, setactiveSpace] = useState(null);

  useEffect(() => {
    dispatch(showAllSpaces());
  }, [dispatch]);

  if (spaces.length < 1) {
    return (
      <div>
        <Typography variant="h4" style={{}} className={classes.load}>
          Relax, The map takes time to load up
        </Typography>
        <div style={{}} className={classes.bar}>
          <ColorLinearProgress />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Typography className={classes.heading} variant="h3">
          Spaces
        </Typography>
        <Grid item xs={12} md={12} component={Paper} elevation={14}>
          <Map center={[56.992882804633986, 10.04150390625]} zoom={zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            />
            {spaces.map((coord) => {
              return (
                <Marker
                  key={coord.id}
                  position={[coord.latitude, coord.longitude]}
                  onclick={() => {
                    setactiveSpace(coord);
                  }}
                  icon={iconSpace}
                  style={{
                    fontFamily: "Dosis, sans-serif",
                  }}
                />
              );
            })}
            {activeSpace && (
              <Popup
                position={[activeSpace.latitude, activeSpace.longitude]}
                onClose={() => {
                  setactiveSpace(null);
                }}
              >
                <Link to={`/spaces/${activeSpace.id}`}>
                  <h2>{activeSpace.name}</h2>
                </Link>
              </Popup>
            )}
          </Map>
        </Grid>
      </div>
    );
  }
};

export default Homepage;
