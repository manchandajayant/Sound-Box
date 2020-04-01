import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import { connect } from "react-redux";
import axios from "axios";
import { newRecording } from "../actions/recordingActions";
import "../CSS/AudioPlayer.css";
class AudioFilesComponent extends Component {
  state = {
    name: "",
    location: "",
    description: "",
    spaceId: this.props.space.id,
    src: null
  };
  onPlay = id => {
    console.log("click", id);
    const b = this.props.recordings.filter(
      n => n.spaceId === this.props.space.id
    );
    this.setState({
      src: b[id].location
    });
  };
  onChange = e => {
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
    //console.log("response", file);

    this.setState({
      location: response.data.url,
      name: response.data.original_filename,
      description: response.data.public_id,
      spaceId: this.state.spaceId
    });

    this.props.newRecording(this.state);
    //console.log("thos", this.state);
  };
  render() {
    console.log("render of afc", this.state);
    const b = this.props.recordings.filter(
      n => n.spaceId === this.props.space.id
    );

    console.log("b", b);
    return (
      <div>
        Ambient Recordings
        {b.map((filtered, index) => {
          return (
            <div key={index} onClick={e => this.onPlay(index)}>
              <p>{filtered.name}</p>
            </div>
          );
        })}
        <AudioPlayer Play src={this.state.src} />
        Upload A Recording
        <input onChange={this.onChange} type="file" name="file" />
        <button onClick={this.submit}>Click</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces,
  user: state.users,
  recordings: state.recordings
});

const mapDispatchToProps = {
  newRecording
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioFilesComponent);
