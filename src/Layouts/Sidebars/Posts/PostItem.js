import React, { Component } from "react";
import moment from "moment";
import Url from "../../../Services/Helpers/Url";
import { Link } from "react-router-dom";
const url = new Url();

export class PostItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        {posts.length > 0 &&
          posts.map(({ id, title, user, category, created_at }) => {
            return (
              <div className="post-entry-1 border-bottom" key={id}>
                <div className="post-meta">
                  <span className="date">{category?.name}</span>{" "}
                  <span className="mx-1">•</span>{" "}
                  <span>
                    {moment(created_at).format("DD/MM/YYYY hh:mm:ss")}
                  </span>
                </div>
                <h2 className="mb-2">
                  <Link to={url.getPost(id, title)}>{title}</Link>
                </h2>
                <span className="author mb-3 d-block">{user?.name}</span>
              </div>
            );
          })}
      </>
    );
  }
}

export default PostItem;
