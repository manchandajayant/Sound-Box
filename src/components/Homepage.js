import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

export class Homepage extends Component {
  render() {
    return (
      <div>
        Welcome
        <Route to="/sketch" />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
