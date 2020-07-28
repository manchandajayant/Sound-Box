import React, { Component, Fragment } from "react";

import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";

import { Button, Grid, Paper, Typography } from "@material-ui/core";

import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "leaflet/dist/leaflet.js";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";

import "./Map.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png",
});

class MapForNewSpaces extends Component {
  state = {
    place: "",
    buttonClicked: false,
  };

  componentDidMount() {
    const map = this.leafletMap.leafletElement;

    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", (data) => {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }

      if (data.results.length > 0) {
        this.setState({ place: data.results[0] });
      }
    });
  }

  render() {
    const center = [56.992882804633986, 10.04150390625];

    return (
      <div>
        <Grid item xs={12} md={12} component={Paper} elevation={14} square>
          <Map
            className="map-style"
            center={center}
            zoom="3"
            ref={(m) => {
              this.leafletMap = m;
            }}
          >
            <TileLayer
              attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
              url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <div className="pointer" />
          </Map>
        </Grid>
        <br />
        <div className="button-div">
          <Button
            className="button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              this.setState({ buttonClicked: true });
              this.props.place(this.state.place);
            }}
          >
            Add {this.state.place.text}
          </Button>
          <br />
          {this.state.buttonClicked ? (
            <Typography variant="h6" className="typography">
              Added {this.state.place.text}
            </Typography>
          ) : (
            <h4>
              <Fragment></Fragment>
            </h4>
          )}
        </div>
      </div>
    );
  }
}

export default MapForNewSpaces;
