import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classname: "para"
    };
  }

  handelClick = () => {
    let classN = "enable";
    this.setState((this.state.classname = classN));
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handelClick}>
          Click
        </button>
        <p className={this.state.classname} id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      </div>
    );
  }
}

export default App;
