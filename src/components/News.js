import React, { Component } from "react";
import NewItem from "./NewItem";

export default class News extends Component {
  render() {
    
    return (
      <div>
      {
          this.props.news.map(news => <NewItem
          title={news.title}
          description={news.description}/>)
      }
      </div>
    );
  }
}
