import React, { Component } from "react";
import { TextField, Typography, Button } from "@material-ui/core";

export default class CreateNewSpace extends Component {
  render() {
    return (
      <div>
        <Typography>NAME</Typography>
        <br />
        <TextField
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.props.onChange}
          values={this.props.values}
          variant="filled"
        />
        <br />
        <br />
        <Typography>DESCRIPTION</Typography>
        <br />
        <TextField
          type="text"
          name="description"
          placeholder="Description"
          onChange={this.props.onChange}
          values={this.props.values}
          variant="filled"
        />
        <br />
        <br />
        <Typography>IMAGE URL</Typography>
        <br />
        <TextField
          type="text"
          name="url"
          placeholder="Event Logo"
          onChange={this.props.onChange}
          values={this.props.values}
          variant="filled"
        />
        <br />
        <br />
        <Button onClick={this.props.onSubmit}>CREATE</Button>
      </div>
    );
  }
}
