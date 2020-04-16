import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import { connect } from "react-redux";
import axios from "axios";
import { newRecording } from "../actions/recordingActions";
import { fetchRecordings } from "../actions/recordingActions";
import "../CSS/AudioPlayer.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Typography, Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
};

class AudioFilesComponent extends Component {
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
    // console.log("click", id);
    const b = this.props.recordings.filter(
      (n) => n.spaceId === this.props.match.params.id
    );
    this.setState({
      src: b[id].location,
    });
  };
  onChange = (e) => {
    // console.log("e", e.target.files);
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
    //console.log("response", file);

    this.setState({
      location: response.data.secure_url,
      name: response.data.original_filename,
      description: response.data.public_id,
      spaceId: this.state.spaceId,
    });

    this.props.newRecording(this.state);
    //console.log("thos", this.state);
  };
  render() {
    //console.log("render of afc", this.props);
    const b = this.props.recordings.filter(
      (n) => n.spaceId === this.props.match.params.id
    );
    const { classes } = this.props;

    const recordingsList =
      this.props.recordings.length === 0 ? (
        <Typography>No recordings yet</Typography>
      ) : (
        <Typography>Recordings</Typography>
      );
    // console.log("b", b);
    if (!this.props.user.auth) {
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

          <Typography variant="h6">
            <Link
              style={{
                color: "black",
                textDecoration: "inherit",
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
AudioFilesComponent.propTypes = {
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
)(withStyles(styles)(AudioFilesComponent));
