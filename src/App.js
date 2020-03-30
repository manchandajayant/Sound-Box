import React from "react";
import { Route } from "react-router";
import "./App.css";
import SpaceDetailContainer from "./components/SpaceDetailContainer";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route exact path="/spaces/:id" component={SpaceDetailContainer} />
    </div>
  );
}

export default App;
