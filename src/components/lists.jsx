import React, { Component } from "react";
import Remove from "./remove";

class lists extends Component {
  state = {};

  render() {
    return (
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          {this.props.log.timestamp} - {this.props.log.log_type}
        </li>
        <li className="list-group-item">
          <Remove
            log={this.props.log}
            onDelete={() => this.props.handleDelete(this.props.log.id)}
          />
        </li>
      </ul>
    );
  }
}

export default lists;
