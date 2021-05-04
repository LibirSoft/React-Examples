import React, { Component } from "react";
import NewItem from "./NewItem";
import NewsFrom from "./NewsFrom";

export default class News extends Component {
  render() {
    const element = this.props.news.map((news) => (
      <NewItem
        key={news.key}
        title={news.title}
        description={news.description}
      />
    ));
    return (
      <div>
        {element}
        <NewsFrom addNews={this.props.addNews} />
      </div>
    );
  }
}
