import React, { Component } from "react";
import Categories from "./Categories";
import Posts from "./Posts/Posts";
import Video from "./Video";

export class Sidebars extends Component {
  render() {
    return (
      <div className="col-md-3">
        <Posts />
        <Video />
        <Categories />
      </div>
    );
  }
}

export default Sidebars;
