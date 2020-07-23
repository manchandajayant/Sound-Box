import React from "react";
import { Route } from "react-router";
import { Container } from "@material-ui/core";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SpaceDetailContainer from "./components/spaces/spaceDetailContainer";
import Homepage from "./components/spaces/listOfSpaces";
import SignUpFormContainer from "./components/signUp/signUpFormContainer";
import LoginFormContainer from "./components/login/loginFormContainer";
import CreateNewSpaceContainer from "./components/addNewSpace/addNewSpaceContainer";
import NavBarComponent from "./components/navBar/navBarComponent";
import AudioFilesComponent from "./components/fieldRecordingsForSpaces/fieldRecordingsForSpacesComponent";
import LandingPage from "./components/landingPage/landingPage";

import About from "./components/about/about";

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
