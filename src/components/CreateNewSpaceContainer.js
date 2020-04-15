import React, { Component } from "react";
import { connect } from "react-redux";
import { newSpace } from "../actions/spaceActions";
import CreateNewSpace from "./CreateNewSpace";
import { newFile } from "../actions/fileActions";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";

class CreateNewSpaceContainer extends Component {
  state = {
    name: "",
    description: "",
    builtIn: "",
    url: "",
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
      spaceMade: true,
    });
  };

  render() {
    console.log(this.props);
    if (!this.props.user.auth) {
      return (
        <Typography variant="h4">
          <Link
            style={{
              color: "black",
              textDecoration: "inherit",
            }}
            to="/login"
          >
            PLEASE LOGIN TO CREATE A NEW SPACE
          </Link>
        </Typography>
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
