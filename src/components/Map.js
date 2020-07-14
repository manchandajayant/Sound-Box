import React, { Component, Fragment } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Map, TileLayer } from "react-leaflet";
import "../CSS/Map.css";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "leaflet/dist/leaflet.js";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png",
});

class MapComp extends Component {
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
      //console.log("res", data.results);
      if (data.results.length > 0) {
        this.setState({ place: data.results[0] });
      }
    });
  }

  // buttonClick =()=>{
  //   this.setState({button(true)})
  // }

  render() {
    const center = [37.7833, -122.4167];
    //console.log(this.props.place, "place");
    //console.log(this.state);

    return (
      <div>
        <Grid item xs={12} md={12} component={Paper} elevation={14} square>
          <Map
            style={{ height: "50vh", width: "100%" }}
            center={center}
            zoom="10"
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
        <div style={{ paddingTop: "2%" }}>
          <Button
            style={{
              fontFamily: "Dosis, sans-serif",
              letterSpacing: "5px",
              backgroundColor: "rgba(100,100,100)",
            }}
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
            <Typography
              variant="h6"
              style={{ fontFamily: "Dosis, sans-serif", letterSpacing: "5px" }}
            >
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

export default MapComp;
