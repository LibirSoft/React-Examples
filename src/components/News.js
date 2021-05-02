import React, { Component } from "react";
import NewItem from "./NewItem";

export default class News extends Component {
  render() {
    const news = [
      {
        title: "title 1 ",
        description: "description 1",
      },
      {
        title: "title 2 ",
        description: "description 2",
      },
      {
        title: "title 3 ",
        description: "description 4",
      },
    ];
    return (
      <div>
        <NewItem title={news[0].title} description={news[0].description} />
      </div>
    );
  }
}
