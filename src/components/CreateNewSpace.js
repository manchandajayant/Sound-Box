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
          placeholder="Image Url"
          onChange={this.props.onChange}
          values={this.props.values}
          variant="filled"
        />
        <br />
        <br />
        <TextField
          type="text"
          name="latitude"
          placeholder="longitude"
          onChange={this.props.onChange}
          values={this.props.values}
          variant="filled"
        />
        <br />
        <br />
        <TextField
          type="text"
          name="longitude"
          placeholder="longitude"
          onChange={this.props.onChange}
          values={this.props.values}
          variant="filled"
        />
        <Button onClick={this.props.onSubmit}>CREATE</Button>
      </div>
    );
  }
}
