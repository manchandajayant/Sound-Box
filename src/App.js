import React from "react";
import { Route } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SpaceDetailContainer from "./components/SpaceDetailContainer";
import Homepage from "./components/Homepage";
import SignUpFormContainer from "./components/SignUpFormContainer";
import LoginFormContainer from "./components/LoginFormContainer";
import CreateNewSpaceContainer from "./components/CreateNewSpaceContainer";
import NavBarComponent from "./components/NavBarComponent";
import AudioFilesComponent from "./components/AudioFilesComponent";
import LandingPage from "./components/LandingPage";
import { Container } from "@material-ui/core";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Container
        style={{
          backgroundColor: "transparent",
          marginBottom: "5%",
          marginTop: "3%",
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
        <Route exact path="/about" component={About} />
      </Container>
    </div>
  );
}

export default App;
