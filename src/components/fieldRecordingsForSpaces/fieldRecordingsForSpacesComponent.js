import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import AudioPlayer from "react-h5-audio-player";

import {
  Typography,
  Container,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { newRecording } from "../../Store/actions/recordingActions";
import { fetchRecordings } from "../../Store/actions/recordingActions";

import "./AudioPlayer.css";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
};

class FieldRecordingsForSpacesComponent extends Component {
  state = {
    name: "",
    location: "",
    description: "",
    spaceId: this.props.match.params.id,
    src: null,
  };
  componentDidMount() {
    this.props.fetchRecordings();
  }
  onPlay = (id) => {
    const b = this.props.recordings.filter(
      (n) => n.spaceId === this.props.match.params.id
    );
    this.setState({
      src: b[id].location,
    });
  };
  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  submit = async (event) => {
    event.preventDefault();
    const { file } = this.state;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ipspnq0s");

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/manjay/raw/upload`,
      formData
    );
    console.log("response", response.data);

    this.setState({
      location: response.data.secure_url,
      name: response.data.original_filename,
      description: response.data.public_id,
      spaceId: this.state.spaceId,
    });

    this.props.newRecording(this.state);
  };
  render() {
    const b = this.props.recordings.filter(
      (n) => n.spaceId === this.props.match.params.id
    );
    const { classes } = this.props;

    const recordingsList =
      this.props.recordings.length === 0 ? (
        <Typography
          style={{ fontFamily: "Dosis, sans-serif", letterSpacing: "3px" }}
        >
          No recordings yet
        </Typography>
      ) : (
        <Typography
          style={{ fontFamily: "Dosis, sans-serif", letterSpacing: "3px" }}
        >
          Recordings
        </Typography>
      );

    if (!this.props.user.auth) {
      return (
        <div>
          <br />
          <Typography
            variant="h4"
            style={{ fontFamily: "Dosis, sans-serif", letterSpacing: "3px" }}
          >
            {recordingsList}
          </Typography>
          <br />
          <br />
          {b.map((filtered, index) => {
            return (
              <div key={index} onClick={(e) => this.onPlay(index)}>
                <Button
                  style={{ color: "white" }}
                  variant="outlined"
                  style={{
                    fontFamily: "Dosis, sans-serif",
                    letterSpacing: "3px",
                  }}
                >
                  {filtered.name}
                </Button>
              </div>
            );
          })}
          <br />
          <br />
          <Container>
            <Grid className={classes.root}>
              <AudioPlayer Play src={this.state.src} />
            </Grid>
          </Container>
          <br />
          <br />

          <Typography variant="h6">
            <Link
              style={{
                color: "black",
                textDecoration: "inherit",
                fontFamily: "Dosis, sans-serif",
                letterSpacing: "3px",
              }}
              to="/login"
            >
              PLEASE LOGIN TO UPLOAD A RECORDING
            </Link>
          </Typography>
          <br />
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <Typography variant="h4">{recordingsList}</Typography>
          <br />
          <br />
          {b.map((filtered, index) => {
            return (
              <div key={index} onClick={(e) => this.onPlay(index)}>
                <Button style={{ color: "white" }} variant="outlined">
                  {filtered.name}
                </Button>
              </div>
            );
          })}
          <br />
          <br />
          <Container>
            <Grid className={classes.root}>
              <AudioPlayer Play src={this.state.src} />
            </Grid>
          </Container>
          <br />
          <br />
          Upload A Recording{"   "}
          <br />
          <br />
          <TextField onChange={this.onChange} type="file" name="file" />
          <br />
          <br />
          <Button
            style={{ color: "black" }}
            variant="contained"
            component="span"
            onClick={this.submit}
          >
            <Typography>Upload</Typography>
          </Button>
          <br />
        </div>
      );
    }
  }
}
FieldRecordingsForSpacesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  spaces: state.spaces,
  space: state.space,
  user: state.users,
  recordings: state.recordings,
});

const mapDispatchToProps = {
  newRecording,
  fetchRecordings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FieldRecordingsForSpacesComponent));
