import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showAllSpaces } from "../actions/spaceActions";
import { Typography } from "@material-ui/core";

// const styles = {
//   root: {
//     display: "flex",
//     flexWrap: "nowrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//   },
//   gridList: {
//     width: 1200,
//     height: 1100,
//     paddingLeft: "1.5%",
//   },
//   icon: {
//     color: "#fff",
//   },
// };

export class Homepage extends Component {
  componentDidMount() {
    this.props.showAllSpaces();
  }

  render() {
    // console.log(this.props);
    if (!this.props.spaces) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <Typography
            variant="h4"
            style={{
              color: "black",
              fontWeight: "2px",
              fontFamily: "IBM Plex Serif,serif",
            }}
          >
            SPACES
          </Typography>
          {this.props.spaces.map((space, index) => (
            <div key={index}>
              <img
                src={space.url}
                alt="Not loading"
                style={{
                  filter: "sepia(100%)",
                }}
              />

              <Typography>
                <Link to={`/spaces/${space.id}`}>{space.name}</Link>
              </Typography>
            </div>
          ))}{" "}
        </div>
      );
    }
  }
}
// Homepage.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  spaces: state.spaces,
  user: state.users,
});

const mapDispatchToProps = {
  showAllSpaces,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
