import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import Start from "./start";
import Lists from "./lists";

const apiEndpoint = "http://192.168.254.112:3002/api/logs";

class counter extends Component {
  state = {
    buttontype: true,
    logs: [],
  };

  async componentDidMount() {
    const { data: logs } = await axios.get(apiEndpoint);
    this.setState({ logs });
  }

  handleStart = async () => {
    const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");
    const obj = {
      timestamp: currentDate,
      log_type: this.state.buttontype === true ? "Start" : "Stop",
    };

    const { data } = await axios.post(apiEndpoint, obj);

    const buttonState = this.state.buttontype === true ? false : true;
    this.setState({ buttontype: buttonState });

    this.componentDidMount();
  };

  handleDelete = async (id) => {
    const { data } = await axios.delete(apiEndpoint + `/${id}`);
    if (data.success) alert("Success");
    else alert("fail");
    this.componentDidMount();
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 offset-md-3">
            <Start
              buttonState={this.state.buttontype}
              changeState={this.handleStart}
            />
          </div>
          <div className="col-lg-4 offset-md-4">
            {this.state.logs.map((log) => (
              <Lists key={log.id} log={log} handleDelete={this.handleDelete} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default counter;
