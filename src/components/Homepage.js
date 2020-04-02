import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showAllSpaces } from "../actions/spaceActions";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

export class Homepage extends Component {
  componentDidMount() {
    this.props.showAllSpaces();
  }
  render() {
    console.log(this.props);
    if (!this.props.spaces) {
      return <h1>Loading...</h1>;
    } else if (!this.props.user.auth) {
      return (
        <h1>
          <Link
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "inherit"
            }}
            to="/"
          >
            PLEASE LOGIN
          </Link>
        </h1>
      );
    } else {
      return (
        <div>
          <GridList cellHeight={300}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">
                <Typography variant="h4">Spaces</Typography>
              </ListSubheader>
            </GridListTile>
            {this.props.spaces.map((space, index) => (
              <GridListTile key={index}>
                <img src={space.url} alt="loading" />
                <GridListTileBar
                  title={space.name}
                  actionIcon={
                    <IconButton>
                      <Link
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          textDecoration: "inherit"
                        }}
                        to={`/spaces/${space.id}`}
                      >
                        Listen
                      </Link>
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
          <Link
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "inherit"
            }}
            to="/newspace"
          >
            <br />
            <br />
            <br />
            <br />
            CREATE YOUR OWN SPACE
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces,
  user: state.users
});

const mapDispatchToProps = {
  showAllSpaces
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
