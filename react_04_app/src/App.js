import React, { Component, Fragment } from "react";
import Counter from "./components/Counter";
class App extends Component {
  state = {
    counter: 0,
  };

  onPlusClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  onMinusClick() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <Fragment>
        <Counter
          counter={this.state.counter}
          onPlusClick={this.onPlusClick.bind(this)}
          onMinusClick={this.onMinusClick.bind(this)}
        />

        <hr></hr>
        <p align="center">
          <b>{this.state.counter}</b>
        </p>
      </Fragment>
    );
  }
}

export default App;
