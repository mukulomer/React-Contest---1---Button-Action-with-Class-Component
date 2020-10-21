import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      para: false
    };
  }

  rederPara() {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }

  render() {
    return (
      <div id="main">
        Hello
        <button
          id="click"
          onClick={() => {
            this.setState({ para: true });
          }}
        >
          click
        </button>
        {this.state.para ? this.rederPara() : ""}
      </div>
    );
  }
}

export default App;

// render() {
//   return (
//     <div id="main">
//       <button id="click" onClick={this.handelClick}>
//         click
//       </button>
//       {this.state.para ? this.rederPara() : ""}
//     </div>
//   );
// }
