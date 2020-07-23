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
import { withStyles } from "@material-ui/core/styles";

import { showAllSpaces } from "../../Store/actions/spaceActions";
import useStyles from "./stylesForListOfSpaces";
import "./Homepage.css";

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#ffffff",
  },
  barColorPrimary: {
    backgroundColor: "rgba(100,100,100)",
  },
})(LinearProgress);

const iconSpace = new Icon({
  iconUrl: "/assets/pin.png",
  iconSize: [20, 20],
});

const ListOfSpaces = () => {
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
        <Typography variant="h4" className={classes.load}>
          Relax, The map takes time to load up
        </Typography>
        <div className={classes.bar}>
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
                  <Typography classname={classes.load}>
                    {activeSpace.name}
                  </Typography>
                </Link>
              </Popup>
            )}
          </Map>
        </Grid>
      </div>
    );
  }
};

export default ListOfSpaces;
