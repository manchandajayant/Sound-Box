import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

import { newSpace } from "../../Store/actions/spaceActions";
import { newFile } from "../../Store/actions/fileActions";
import addNewSpace from "./addNewSpace";
import loginFormContainer from "../login/loginFormContainer";
import mapForSpaces from "./mapForSpaces";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  login: {
    color: "white",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
  },
  Link: {
    color: "black",
    textDecoration: "inherit",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
  },
  description: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  button: {
    backgroundColor: "rgb(100,100,100)",
  },
  typography: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
  },
  heading: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
});

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#ffffff",
  },
  barColorPrimary: {
    backgroundColor: "rgba(100,100,100)",
  },
})(LinearProgress);

class CreateNewSpaceContainer extends Component {
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
    formData.append("upload_preset", "ipspnq0s");

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);

        if (percent < 100) {
          this.setState({ uploadPercentage: percent });
        }
      },
    };

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/manjay/raw/upload`,
      formData,
      options
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
    const { classes, theme } = this.props;
    if (!this.props.user.auth) {
      return (
        <div>
          <Typography variant="h5" className={classes.login}>
            Please login/sign up to add a new space
          </Typography>
          <loginFormContainer />
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
          <br />
          <br />
          <br />
          <Typography className={classes.typography}>
            Impulse Response
          </Typography>
          <br />
          <br />
          <TextField
            type="file"
            name="file"
            placeholder="File"
            onChange={this.onChangeForFile}
            values={this.state}
          />
          <br />
          <br />
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
          <br />
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <Typography variant="h3" className={classes.heading}>
            Space Details{" "}
          </Typography>

          <br />
          <br />
          <br />
          <Typography variant="h6" className={classes.description}>
            *To add a space, you will need an impulse response, if you are not
            aware of what that is, you could go to the{" "}
            <Link to="/about">About</Link> page
          </Typography>
          <br />
          <mapForSpaces place={this.addAPlace} />

          <br />
          <br />
          <addNewSpace
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    }
  }
}

CreateNewSpaceContainer.propTypes = {
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
)(withStyles(styles, { withTheme: true })(CreateNewSpaceContainer));
