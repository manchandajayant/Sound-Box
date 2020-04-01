import React, { Component } from "react";
import { connect } from "react-redux";
import { showOneSpace } from "../actions/spaceActions";
import { fetchRecordings } from "../actions/recordingActions";
import P5sketchComponent from "./P5sketchComponent";
import { Link } from "react-router-dom";
import AudioFilesComponent from "./AudioFilesComponent";
//import "../CSS/spaceDetail.css";
import "../App.css";
export class SpaceDetailContainer extends Component {
  componentDidMount() {
    this.props.showOneSpace(Number(this.props.match.params.id));
    this.props.fetchRecordings();
  }
  render() {
    console.log(this.props);
    // if (!this.props.user.auth) {
    //   return (
    //     <h1>
    //       <Link to="/">PLEASE LOGIN OR SIGN UP</Link>
    //     </h1>
    //   );
    // } else
    if (this.props.space) {
      return (
        <div>
          <h1>{this.props.space.name}</h1>
          <p>{this.props.space.description}</p>
          <img src={this.props.space.url} alt="loading" />
          <P5sketchComponent />
          <AudioFilesComponent
            recordings={this.props.recordings}
            space={this.props.space}
          />
        </div>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }
}

const mapStateToProps = state => ({
  space: state.space,
  user: state.users,
  recordings: state.recordings
});

const mapDispatchToProps = {
  showOneSpace,
  fetchRecordings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceDetailContainer);
