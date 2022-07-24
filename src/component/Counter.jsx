import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = (e) => {
    this.setState({
      count: this.state.count + e,
    });
  };

  render() {
    return (
      <div>
        <h3>Counter: {this.state.count}</h3>

        <button onClick={ this.props.decrement}>Count(-)</button>
        <button onClick={this.incrementCount.bind(this, 5 )}>Count(+)</button>
      </div>
    );
  }
}
export default Counter;
