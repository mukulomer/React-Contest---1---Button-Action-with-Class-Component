import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      para: <p></p>
    };
  }

  handelClick = () => {
    let newPara = (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
    this.setState({
      para: newPara
    });
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handelClick}>
          Click
        </button>
        {this.state.para}
      </div>
    );
  }
}

export default App;
