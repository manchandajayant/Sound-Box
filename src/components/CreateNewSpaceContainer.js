import React, { Component } from "react";
import { connect } from "react-redux";
import { newSpace } from "../actions/spaceActions";
import CreateNewSpace from "./CreateNewSpace";
import { newFile } from "../actions/fileActions";
import { Redirect } from "react-router";
import axios from "axios";
export class CreateNewSpaceContainer extends Component {
  state = {
    name: "",
    description: "",
    builtIn: "",
    url: "",
    spaceMade: false,
    location: "",
    name: "",
    description: "",
    spaceId: 0,
    redirect: false
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onChangeForFile = e => {
    console.log("e", e.target.files);
    this.setState({ file: e.target.files[0] });
  };
  submit = async event => {
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
      location: response.data.url,
      name: response.data.original_filename,
      description: response.data.public_id,
      spaceId: this.props.spaces.length,
      redirect: true
    });
    this.props.newFile(this.state);
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.newSpace(this.state);
    this.setState({
      name: "",
      description: "",
      builtIn: "",
      url: "",
      spaceMade: true
    });
  };

  render() {
    console.log(this.props);
    if (this.state.redirect) {
      return <Redirect to="/homepage" />;
    } else if (this.state.spaceMade) {
      return (
        <div>
          {" "}
          Impulse Response
          <input
            type="file"
            name="file"
            placeholder="File"
            onChange={this.onChangeForFile}
            values={this.state}
          />
          <button onClick={this.submit}>Click</button>
        </div>
      );
    } else {
      return (
        <div>
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

const mapStateToProps = state => ({
  spaces: state.spaces,
  user: state.users,
  recordings: state.recordings
});

const mapDispatchToProps = {
  newSpace,
  newFile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewSpaceContainer);
