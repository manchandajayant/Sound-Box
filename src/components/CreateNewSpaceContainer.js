import React, { Component } from "react";
import { connect } from "react-redux";
import { newSpace } from "../actions/spaceActions";
import CreateNewSpace from "./CreateNewSpace";
import { newFile } from "../actions/fileActions";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import LoginFormContainer from "./LoginFormContainer";

class CreateNewSpaceContainer extends Component {
  state = {
    name: "",
    description: "",
    url: "",
    latitude: "",
    longitude: "",
    spaceMade: false,
    location: "",
    name2: "",
    description2: "",
    spaceId: 0,
    redirect: false,
    fileLoad: false,
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onChangeForFile = (e) => {
    console.log("e", e.target.files);
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
    // console.log("response", response.data);

    this.setState({
      location: response.data.secure_url,
      name2: response.data.original_filename,
      description2: response.data.public_id,
      spaceId: this.props.spaces.length,
      redirect: true,
    });
    this.props.newFile(this.state);
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.newSpace(this.state);

    this.setState({
      name: "",
      description: "",
      builtIn: "",
      url: "",
      latitude: "",
      longitude: "",
      spaceMade: true,
    });
  };

  render() {
    // console.log(this.props);
    if (!this.props.user.auth) {
      return (
        <div>
          <Typography variant="h5" style={{ color: "white" }}>
            Please login/sign up to create a new space
          </Typography>
          <LoginFormContainer />
        </div>
      );
    } else if (this.state.redirect) {
      return (
        <Link
          style={{ color: "black", textDecoration: "inherit" }}
          to={`/spaces/${this.props.spaces.length}`}
        >
          You Created a space, click to open it
        </Link>
      );
    } else if (this.state.spaceMade) {
      return (
        <div>
          {" "}
          <br />
          <br />
          <br />
          <Typography>Impulse Response</Typography>
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
          <Button onClick={this.submit}>Upload</Button>
        </div>
      );
    } else {
      return (
        <div>
          <Typography variant="h3">Space Details </Typography>
          <br />
          <br />
          <br />
          <Typography>
            *To create a new space, you will need an impulse response, if you
            are not aware what that is, you could go to the{" "}
            <Link to="/about">About</Link> page
          </Typography>
          <br />
          <CreateNewSpace
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    }
  }
}

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
)(CreateNewSpaceContainer);
