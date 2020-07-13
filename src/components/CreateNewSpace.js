import React, { Component } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

export default class CreateNewSpace extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <br />
          <br />
          <Grid item xs={12} sm={6}>
            <Typography
              style={{ fontFamily: "Dosis, sans-serif", letterSpacing: "5px" }}
            >
              Description
            </Typography>
            <br />
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
          <br />
          <br />
          <Grid item xs={12} sm={6}>
            <Typography
              style={{ fontFamily: "Dosis, sans-serif", letterSpacing: "5px" }}
            >
              Image Url
            </Typography>
            <br />
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
          <br />

          <br />
          <br />
        </Grid>
        <div style={{ paddingTop: "5%" }}>
          <Button
            style={{
              fontFamily: "Dosis, sans-serif",
              letterSpacing: "5px",
              backgroundColor: "rgba(100,100,100)",
            }}
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
