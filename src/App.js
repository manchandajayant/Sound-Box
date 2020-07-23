import React from "react";
import { Route } from "react-router";
import { Container } from "@material-ui/core";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SpaceDetailContainer from "./components/spaces/spaceDetailContainer";
import ListOfSpaces from "./components/spaces/listOfSpaces";
import SignUpFormContainer from "./components/signUp/signUpFormContainer";
import LoginFormContainer from "./components/login/loginFormContainer";
import AddNewSpaceContainer from "./components/addNewSpace/addNewSpaceContainer";
import NavBarComponent from "./components/navBar/navBarComponent";
import FieldRecordingsForSpacesComponent from "./components/fieldRecordingsForSpaces/fieldRecordingsForSpacesComponent";
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
        <Route exact path="/spaces" component={ListOfSpaces} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/spaces/:id" component={SpaceDetailContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/newspace" component={AddNewSpaceContainer} />

        <Route
          exact
          path="/spaces/:id/audiofiles"
          component={FieldRecordingsForSpacesComponent}
        />
        <Route exact path="/about" component={About} />
      </Container>
    </div>
  );
}

export default App;
