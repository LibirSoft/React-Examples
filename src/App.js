import logo from "./logo.svg";
import News from "./components/News";
import "./App.css";

import React, { Component } from "react";
const news = [
  {
    key: 1,
    title: "title 1 ",
    description: "description 1",
  },
  {
    key: 2,
    title: "title 2 ",
    description: "description 2",
  },
  {
    key: 3,
    title: "title 3 ",
    description: "description 3",
  },
];

export default class App extends Component {
  addNews() {
    console.log("app.js den geldim s.a");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <News news={news} addNews={this.addNews} />
        </header>
      </div>
    );
  }
}
