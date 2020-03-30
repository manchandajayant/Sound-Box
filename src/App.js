import React from "react";
import { Route } from "react-router";
import "./App.css";
import SpaceDetailContainer from "./components/SpaceDetailContainer";
import Homepage from "./components/Homepage";
import SignUpFormContainer from "./components/SignUpFormContainer";
import LoginFormContainer from "./components/LoginFormContainer";

function App() {
  return (
    <div className="App">
      <Route exact path="/homepage" component={Homepage} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/spaces/:id" component={SpaceDetailContainer} />
      <Route exact path="/" component={LoginFormContainer} />
    </div>
  );
}

export default App;
