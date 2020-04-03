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
    // NAV-BAR
    <div className="App">
      <AppBar
        position="static"
        style={{ background: "rgba(240, 225, 220, 0.6)" }}
      >
        <ToolBar>
          <Typography
            style={{
              color: "black",
              marginRight: "20px",
              border: "solid 0.5px black",
              borderRadius: "2px",
              backgroundColor: "rgb(120, 141, 154)"
            }}
          >
            s w o g a n
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
              CREATE A NEW SPACE
            </Link>
          </Button>
          <Button style={{ marginLeft: "63%", paddingRight: "1%" }}>
            <Link
              style={{
                color: "black",
                textDecoration: "inherit"
              }}
              to="/"
            >
              Login
            </Link>
          </Button>
          <Button>
            <Link
              style={{
                color: "black",
                textDecoration: "inherit"
              }}
              to="/"
            >
              About
            </Link>
          </Button>
        </ToolBar>
      </AppBar>
      <Container
        style={{
          backgroundColor: "rgba(138, 138, 148, 0.4)",
          marginBottom: "5%"
        }}
      >
        {/* ROUTES DEFINED */}
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
      {/* <Container
        style={{
          backgroundColor: "rgba(138, 138, 148, 0.4)",
          marginBottom: "5%"
        }}
      >
        
      </Container> */}
    </div>
  );
}

export default App;
