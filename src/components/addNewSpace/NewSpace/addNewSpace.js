import React, { Component } from "react";

import { TextField, Typography, Button, Grid } from "@material-ui/core";

import "./new-space.css";

export default class AddNewSpace extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              color="primary"
              name="description"
              placeholder="Description"
              onChange={this.props.onChange}
              values={this.props.values}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography className="typography">Image Url</Typography>

            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              color="primary"
              name="url"
              placeholder="Image Url"
              onChange={this.props.onChange}
              values={this.props.values}
            />
          </Grid>
        </Grid>
        <div className="button-div">
          <Button
            className="button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.props.onSubmit}
          >
            CREATE
          </Button>
        </div>
      </div>
    );
  }
}
