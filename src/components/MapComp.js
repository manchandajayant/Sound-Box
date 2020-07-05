import React, { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Map, TileLayer } from "react-leaflet";
import "../CSS/Map.css";
import { Button } from "@material-ui/core";

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

      console.log("res", data.results);
      if (data.results.length > 0) {
        this.setState({ place: data.results[0] });
      }
    });
  }

  render() {
    const center = [37.7833, -122.4167];
    console.log(this.state.place.text);
    return (
      <div>
        <Button>Add {this.state.place.text}</Button>
        <Map
          style={{ height: "100vh" }}
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
      </div>
    );
  }
}

export default MapComp;