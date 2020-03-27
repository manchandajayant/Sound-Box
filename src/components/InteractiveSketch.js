import React from "react";
import P5Wrapper from "react-p5-wrapper";

import draw from "../sketches/Draw";

export default class InteractiveSketch extends React.Component {
  render() {
    return <P5Wrapper sketch={draw} />;
  }
}
