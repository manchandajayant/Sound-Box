import React, { Component } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

export default class CreateNewSpace extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography>Name</Typography>
            <br />
            <TextField
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.props.onChange}
              values={this.props.values}
              variant="filled"
            />
          </Grid>
          <br />
          <br />
          <Grid item xs={12} sm={4}>
            <Typography>Description</Typography>
            <br />
            <TextField
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.props.onChange}
              values={this.props.values}
              variant="filled"
            />
          </Grid>
          <br />
          <br />
          <Grid item xs={12} sm={4}>
            <Typography>Image Url</Typography>
            <br />
            <TextField
              type="text"
              name="url"
              placeholder="Image Url"
              onChange={this.props.onChange}
              values={this.props.values}
              variant="filled"
            />
          </Grid>
          <br />
          <br />
          <Grid item xs={12} sm={4}>
            <Typography>Location Latitude</Typography>
            <br />
            <TextField
              type="text"
              name="latitude"
              placeholder="longitude"
              onChange={this.props.onChange}
              values={this.props.values}
              variant="filled"
            />
          </Grid>
          <br />
          <br />
          <Grid item xs={12} sm={4}>
            <Typography>Location longitude</Typography>
            <br />
            <TextField
              type="text"
              name="longitude"
              placeholder="longitude"
              onChange={this.props.onChange}
              values={this.props.values}
              variant="filled"
            />
          </Grid>
          <br />
          <br />
          <br />
        </Grid>
        <div style={{ paddingTop: "5%" }}>
          <Button variant="contained" onClick={this.props.onSubmit}>
            CREATE
          </Button>
        </div>
      </div>
    );
  }
}
