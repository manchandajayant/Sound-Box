import React, { Component } from "react";
import { connect } from "react-redux";
import { showOneSpace } from "../actions/spaceActions";
import { fetchFile } from "../actions/fileActions";
import P5sketchComponent from "./P5sketchComponent";
import { Link } from "react-router-dom";

export class SpaceDetailContainer extends Component {
  componentDidMount() {
    this.props.showOneSpace(Number(this.props.match.params.id));
    //this.props.fetchFile();
  }
  render() {
    console.log(this.props);
    if (this.props.space) {
      return (
        <div>
          <P5sketchComponent />
        </div>
      );
    } else {
      return <h1>Nnothing</h1>;
    }
  }
}

const mapStateToProps = state => ({
  space: state.space
});

const mapDispatchToProps = {
  showOneSpace,
  fetchFile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceDetailContainer);
