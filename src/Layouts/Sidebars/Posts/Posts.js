import React, { Component } from "react";
import HttpClient from "../../../Services/Api/HttpClient";

import PostItem from "./PostItem";

const client = new HttpClient();

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      tab: 'popular'
    };
  }

  getPosts = async (limit, type = "latest") => {
    const filters = {
      _limit: limit,
      sort: "id",
      order: "desc",
    };

    if (type == "popular" || type == "trending") {
      filters.q = type;
    }

    let urlStr = "?_expand=category&_expand=user";

    if (Object.keys(filters).length) {
      urlStr = urlStr + "&" + new URLSearchParams(filters).toString();
    }

    const res = await client.get(client.posts + urlStr);
    if (res.response.ok) {
      this.setState({
        posts: res.data,
      });
    }
  };

  componentDidMount = () => {
    this.getPosts(5, "popular");
  };

  componentDidUpdate = (prevProps, prevState) => {
    const {tab: prevTab} = prevState;
    const {tab} = this.state;
   
    if (prevTab !== tab){
      this.getPosts(5, tab);
    }
  }

  handeChangeTab = (e) => {
      this.setState({
        tab: e.target.dataset.current
      })
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="aside-block">
        <ul
          className="nav nav-pills custom-tab-nav mb-4"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-popular-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-popular"
              type="button"
              role="tab"
              aria-controls="pills-popular"
              aria-selected="true"
              data-current = "popular"
              onClick={this.handeChangeTab}
            >
              Popular
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-trending-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-trending"
              type="button"
              role="tab"
              aria-controls="pills-trending"
              aria-selected="false"
              data-current = "trending"
              onClick={this.handeChangeTab}
            >
              Trending
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-latest-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-latest"
              type="button"
              role="tab"
              aria-controls="pills-latest"
              aria-selected="false"
              data-current = "latest"
              onClick={this.handeChangeTab}
            >
              Latest
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {/* Popular */}
          <div
            className="tab-pane fade show active"
            id="pills-popular"
            role="tabpanel"
            aria-labelledby="pills-popular-tab"
          >
            <PostItem posts={posts} />
          </div>{" "}
          {/* End Popular */}
          {/* Trending */}
          <div
            className="tab-pane fade"
            id="pills-trending"
            role="tabpanel"
            aria-labelledby="pills-trending-tab"
          >
            <PostItem posts={posts} />
          </div>{" "}
          {/* End Trending */}
          {/* Latest */}
          <div
            className="tab-pane fade"
            id="pills-latest"
            role="tabpanel"
            aria-labelledby="pills-latest-tab"
          >
            <PostItem posts={posts} />
          </div>{" "}
          {/* End Latest */}
        </div>
      </div>
    );
  }
}

export default Posts;
