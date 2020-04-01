import React, { Component } from "react";

export default class CreateNewSpace extends Component {
  render() {
    return (
      <div>
        NAME:
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        DESCRIPTION
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        IMAGE:
        <input
          type="text"
          name="url"
          placeholder="Event Logo"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        <button onClick={this.props.onSubmit}>CREATE</button>
      </div>
    );
  }
}
