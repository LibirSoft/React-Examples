import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "mehmet",
  };
  changename = () => {
    this.setState({
      name: "ahmet",
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.name}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Examples</h1>
          <button onClick={this.changename}>name changer</button>
        </header>
      </div>
    );
  }
}
