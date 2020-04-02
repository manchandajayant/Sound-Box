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

function App() {
  return (
    <div className="App">
      <AppBar position="static" style={{ background: "rgb(50,50,50,0.5)" }}>
        <ToolBar>
          <Typography style={{ color: "black" }}>SOUNDBOX</Typography>
        </ToolBar>
      </AppBar>
      <Route exact path="/homepage" component={Homepage} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/spaces/:id" component={SpaceDetailContainer} />
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/newspace" component={CreateNewSpaceContainer} />
    </div>
  );
}

export default App;
