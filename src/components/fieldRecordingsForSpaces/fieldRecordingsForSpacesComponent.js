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

import {
  newRecording,
  fetchRecordings,
} from "../../Store/actions/recordingActions";

import { styles } from "./fieldRecordingComponentStyle";
import "./audio-player.css";

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
        <Typography className={classes.recordingsList}>
          No recordings yet
        </Typography>
      ) : (
        <Typography className={classes.recordingsList}>Recordings</Typography>
      );

    if (!this.props.user.auth) {
      return (
        <div>
          <Typography variant="h4" className={classes.recordingsList}>
            {recordingsList}
          </Typography>

          {b.map((filtered, index) => {
            return (
              <div key={index} onClick={(e) => this.onPlay(index)}>
                <Button
                  className={classes.buttonFilteredName}
                  variant="outlined"
                >
                  {filtered.name}
                </Button>
              </div>
            );
          })}

          <Container>
            <Grid className={classes.root}>
              <AudioPlayer Play src={this.state.src} />
            </Grid>
          </Container>

          <Typography variant="h6">
            <Link className={classes.loginLink} to="/login">
              PLEASE LOGIN TO UPLOAD A RECORDING
            </Link>
          </Typography>
        </div>
      );
    } else {
      return (
        <div>
          <Typography variant="h4">{recordingsList}</Typography>
          {b.map((filtered, index) => {
            return (
              <div key={index} onClick={(e) => this.onPlay(index)}>
                <Button className={classes.uploadButton} variant="outlined">
                  {filtered.name}
                </Button>
              </div>
            );
          })}
          <Container>
            <Grid className={classes.root}>
              <AudioPlayer Play src={this.state.src} />
            </Grid>
          </Container>
          <Typography className={classes.recordingsList}>
            {" "}
            Upload A Recording{"   "}
          </Typography>
          <TextField
            onChange={this.onChange}
            type="file"
            name="file"
            className={classes.textField}
          />
          <Button
            className={classes.uploadButton}
            variant="contained"
            component="span"
            onClick={this.submit}
          >
            <Typography>Upload</Typography>
          </Button>
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
