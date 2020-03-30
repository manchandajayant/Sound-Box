import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showAllSpaces } from "../actions/spaceActions";

export class Homepage extends Component {
  componentDidMount() {
    this.props.showAllSpaces();
  }
  render() {
    console.log(this.props);
    if (!this.props.spaces) {
      return <h1>Loading...</h1>;
    } else if (!this.props.user.auth) {
      return (
        <h1>
          <Link to="/">PLEASE LOGIN OR SIGN UP</Link>
        </h1>
      );
    } else {
      return (
        <div>
          {this.props.spaces.map((space, index) => (
            <div key={index}>
              <h1 className="space">
                <Link to={`/spaces/${space.id}`}>{space.name}</Link>
              </h1>
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces,
  user: state.users
});

const mapDispatchToProps = {
  showAllSpaces
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
