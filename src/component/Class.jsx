
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>

        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
