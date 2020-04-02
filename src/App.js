import React from "react";
import { Route } from "react-router";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SpaceDetailContainer from "./components/SpaceDetailContainer";
import Homepage from "./components/Homepage";
import SignUpFormContainer from "./components/SignUpFormContainer";
import LoginFormContainer from "./components/LoginFormContainer";
import CreateNewSpaceContainer from "./components/CreateNewSpaceContainer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AudioFilesComponent from "./components/AudioFilesComponent";
import { Container } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <AppBar
        position="static"
        style={{ background: "rgba(138, 138, 148, 0.1)" }}
      >
        <ToolBar>
          <Typography
            style={{
              color: "black",
              marginRight: "20px"
            }}
          >
            SPACE-EMULATOR
          </Typography>
          <Button style={{ color: "black" }}>
            <Link
              style={{
                color: "black",
                textDecoration: "inherit"
              }}
              to="/spaces"
            >
              SPACES
            </Link>
          </Button>
          <Button>
            <Link
              style={{
                color: "black",
                textDecoration: "inherit"
              }}
              to="/newspace"
            >
              UPLOAD
            </Link>
          </Button>
        </ToolBar>
      </AppBar>
      <Container
        style={{
          //border: "solid 2px black",
          backgroundColor: "rgba(255,255,250,0.6)"
        }}
      >
        <Route exact path="/spaces" component={Homepage} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/spaces/:id" component={SpaceDetailContainer} />
        <Route exact path="/" component={LoginFormContainer} />
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
