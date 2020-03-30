import React from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../p5sketch/sketch";
import { connect } from "react-redux";
import { showAllSpaces } from "../actions/spaceActions";

class P5sketchComponent extends React.Component {
  componentDidMount() {
    this.props.showAllSpaces();
  }
  render() {
    //console.log("lll", this.props);
    return <P5Wrapper sketch={sketch} space={this.props.space} />;
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces,
  space: state.space
});

const mapDispatchToProps = {
  showAllSpaces
};

export default connect(mapStateToProps, mapDispatchToProps)(P5sketchComponent);
