import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showAllSpaces } from "../actions/spaceActions";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Typography } from "@material-ui/core";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
const styles = {
  root: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 1200,
    height: 1100,
    paddingLeft: "1.5%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
};

export class Homepage extends Component {
  componentDidMount() {
    this.props.showAllSpaces();
  }
  render() {
    const { classes } = this.props;

    // console.log(this.props);
    if (!this.props.spaces) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className={classes.root}>
          <GridList cellHeight={300} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">
                <Typography
                  variant="h4"
                  style={{
                    color: "black",
                    fontWeight: "2px",
                  }}
                >
                  SPACES
                </Typography>
              </ListSubheader>
            </GridListTile>
            {this.props.spaces.map((space, index) => (
              <GridListTile key={index}>
                <img
                  src={space.url}
                  alt="No Image"
                  style={{ filter: "grayscale(20%)" }}
                />
                <GridListTileBar
                  title={space.name}
                  actionIcon={
                    <IconButton>
                      <Link
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          textDecoration: "inherit",
                        }}
                        to={`/spaces/${space.id}`}
                      >
                        <RecordVoiceOverIcon />
                      </Link>
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
    }
  }
}
Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  spaces: state.spaces,
  user: state.users,
});

const mapDispatchToProps = {
  showAllSpaces,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Homepage));
