import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllSpaces } from "../actions/spaceActions";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "../CSS/Homepage.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.spaces);

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
        <Map center={[49.185294, 6.502752]} zoom={3}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          />
          {spaces.map((coord) => {
            return (
              <Marker
                key={coord.id}
                position={[coord.latitude, coord.longitude]}
              />
            );
          })}
        </Map>
      </div>
    );
  }
};

export default Homepage;
