import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }
  currentTime() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);

  }

  render() {
    return (
      <div>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
