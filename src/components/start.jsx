import React, { Component } from "react";

class start extends Component {
  state = {};

  render() {
    return (
      <div>
        <button
          type="button"
          className={this.getClasses()}
          onClick={() => this.props.changeState()}
        >
          {this.getPosition()}
        </button>
      </div>
    );
  }
  getClasses() {
    let classes = "btn btn-lg btn-";
    classes += this.props.buttonState === true ? "success" : "danger";
    return classes;
  }
  getPosition() {
    const word = this.props.buttonState === true ? "Start" : "Stop";

    return word;
  }
}

export default start;
