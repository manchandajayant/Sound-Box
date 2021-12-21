import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

import { newSpace } from "../../../Store/actions/spaceActions";
import { newFile } from "../../../Store/actions/fileActions";
import { styles, ColorLinearProgress } from "./stylesForNewSpaceContaner";

import AddNewSpace from "./addNewSpace";
import LoginFormContainer from "../../login/loginFormContainer";
import MapForSpaces from "../MapForNewSpaces/mapForSpaces";

class AddNewSpaceContainer extends Component {
  state = {
    name: "",
    description: "",
    url: "",
    latitude: 0,
    longitude: 0,
    spaceMade: false,
    location: "",
    name2: "",
    description2: "",
    spaceId: 0,
    redirect: false,
    uploadPercentage: null,
    buttonClick: false,
    fileLoad: false,
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeForFile = (e) => {
    this.setState({ file: e.target.files[0], fileLoad: true });
  };
  submit = async (event) => {
    event.preventDefault();
    const { file } = this.state;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "VERBER");

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        if (percent < 100) {
          console.log(percent);
          this.setState({ uploadPercentage: percent });
        }
      },
    };

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/manjay/raw/upload`,
      formData,
      options.onUploadProgress
    );

    this.setState({
      location: response.data.secure_url,
      name2: response.data.original_filename,
      description2: response.data.public_id,
      spaceId: this.props.spaces.length,
      redirect: true,
      buttonClick: true,
    });
    this.props.newFile(this.state);
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.props.newSpace(this.state);

    this.setState({
      name: this.state.name,
      description: "",
      builtIn: "",
      url: "",
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      spaceMade: true,
    });
  };

  addAPlace = (p) => {
    this.setState({
      name: p.text,
      latitude: p.latlng.lat,
      longitude: p.latlng.lng,
    });
  };

  render() {
    const { classes } = this.props;
    if (!localStorage.jwt) {
      return (
        <div>
          <Typography variant="h5" className={classes.login}>
            Please login/sign up to add a new space
          </Typography>
          <LoginFormContainer />
        </div>
      );
    } else if (this.state.redirect) {
      return (
        <Link
          className={classes.Link}
          to={`/spaces/${this.props.spaces.length}`}
        >
          You added a space, click to open it
        </Link>
      );
    } else if (this.state.spaceMade) {
      return (
        <div>
          {" "}
          <Typography className={classes.typography}>
            Impulse Response
          </Typography>
          <TextField
            type="file"
            name="file"
            placeholder="File"
            onChange={this.onChangeForFile}
            values={this.state}
          />
          <Button
            onClick={this.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Upload
          </Button>
          {this.state.uploadPercentage > 0 ? (
            <div style={{ paddingTop: "10%" }}>
              <ColorLinearProgress value={this.state.uploadPercentage} />
              <Typography className={classes.typography}>
                Uploading {this.state.uploadPercentage} %
              </Typography>
            </div>
          ) : (
            <Typography className={classes.typography}></Typography>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <Typography variant="h3" className={classes.heading}>
            Space Details{" "}
          </Typography>

          <Typography variant="h6" className={classes.description}>
            *To add a space, you will need an impulse response, if you are not
            aware of what that is, you could go to the{" "}
            <Link to="/about">About</Link> page
          </Typography>

          <MapForSpaces place={this.addAPlace} />

          <AddNewSpace
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    }
  }
}

AddNewSpaceContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  spaces: state.spaces,
  user: state.users,
  recordings: state.recordings,
});

const mapDispatchToProps = {
  newSpace,
  newFile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(AddNewSpaceContainer));
