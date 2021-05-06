import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter.js"
import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "mehmet",
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.name}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Examples</h1>
         <Counter></Counter>
        </header>
      </div>
    );
  }
}
