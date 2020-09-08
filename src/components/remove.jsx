import React, { Component } from "react";

class remove extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.props.onDelete(this.props.log.timestamp)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default remove;
