import React, { Component } from "react";
import { connect } from "react-redux";
import { showOneSpace } from "../actions/spaceActions";
import { fetchRecordings } from "../actions/recordingActions";
import P5sketchComponent from "./P5sketchComponent";
import { Link } from "react-router-dom";
import "../App.css";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
};
export class SpaceDetailContainer extends Component {
  componentDidMount() {
    this.props.showOneSpace(Number(this.props.match.params.id));
    this.props.fetchRecordings();
  }
  render() {
    //console.log(this.props);
    if (this.props.space) {
      return (
        <div>
          <Typography variant="h2">{this.props.space.name}</Typography>
          <br />
          <Typography variant="h5">{this.props.space.description}</Typography>
          <br />
          <img
            src={this.props.space.url}
            style={{
              maxWidth: "100%",
              height: "auto",
              filter: "grayscale(20%)",
            }}
            alt="loading"
          />

          <P5sketchComponent />
          <Typography variant="h6">
            <Link
              style={{
                color: "black",
                textDecoration: "inherit",
              }}
              to={`/spaces/${this.props.space.id}/audiofiles`}
            >
              AMBIENT RECORDINGS
            </Link>
          </Typography>
        </div>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }
}
SpaceDetailContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  space: state.space,
  user: state.users,
  recordings: state.recordings,
});

const mapDispatchToProps = {
  showOneSpace,
  fetchRecordings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SpaceDetailContainer));
