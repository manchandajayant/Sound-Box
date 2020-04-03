import React from "react";
import { Route } from "react-router";
import "./App.css";
import SpaceDetailContainer from "./components/SpaceDetailContainer";
import Homepage from "./components/Homepage";
import SignUpFormContainer from "./components/SignUpFormContainer";
import LoginFormContainer from "./components/LoginFormContainer";
import CreateNewSpaceContainer from "./components/CreateNewSpaceContainer";
import NavBar from "./components/NavBar";
import AudioFilesComponent from "./components/AudioFilesComponent";
import LandingPage from "./components/LandingPage";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container
        style={{
          backgroundColor: "rgba(138, 138, 148, 0.4)",
          marginBottom: "5%"
        }}
      >
        {/* ROUTES DEFINED */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/spaces" component={Homepage} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/spaces/:id" component={SpaceDetailContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/newspace" component={CreateNewSpaceContainer} />

        <Route
          exact
          path="/spaces/:id/audiofiles"
          component={AudioFilesComponent}
        />
      </Container>
    </div>
  );
}

export default App;
