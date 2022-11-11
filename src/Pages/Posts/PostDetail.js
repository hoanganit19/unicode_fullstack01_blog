import React, { Component } from "react";
import withRouter from "../../Services/Routes/withRouter";
import withContext from "../../Services/Context/withContext";
import Sidebars from "../../Layouts/Sidebars/Sidebars";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import HttpClient from "../../Services/Api/HttpClient";
import moment from "moment";
import Error404 from "../../Errors/Error404";

const client = new HttpClient();

export class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      status: "pending",
      comments: [],
      commentType: 'comment'
    };
  }

  getPost = async (id) => {
    const res = await client.get(client.posts + "/" + id, {
      _expand: "category",
    });
    if (res.response.ok) {
      this.setState({
        post: res.data,
        status: "success",
      });
    } else {
      this.setState({
        status: "success",
      });
    }
  };

  componentDidMount = () => {
    const { id } = this.props.params;
    this.getPost(id);
    this.getComments(id);
  };

  getComments = async (postId) => {
    const res = await client.get(client.comments, {
      _sort: 'id',
      _order: 'desc',
      postId: postId
    });
    
    if (res.response.ok){
      
      this.setState({
        comments: res.data
      })
    }
  }

  postComment = async (comment, type='comment') => {
    const { id: postId } = this.props.params;
    comment.postId = parseInt(postId);

    const res = await client.post(client.comments, comment);
    
    if (res.response.ok){
      this.getComments(postId);
      if (type!=='comment'){
        this.setState({
          commentType: type
        })
      }
    }
  }

  render() {
    const { post, status, comments } = this.state;
    return (
      <section className="single-post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content" data-aos="fade-up">
              {status === "success" &&
                (Object.keys(post).length > 0 ? (
                  <>
                    <div className="single-post">
                      <div className="post-meta">
                        <span className="date">{post?.category?.name}</span>{" "}
                        <span className="mx-1">•</span>{" "}
                        <span>
                          {moment(post?.created_at).format(
                            "DD/MM/YYYY hh:mm:ss"
                          )}
                        </span>
                      </div>
                      <h1 className="mb-5">{post?.title}</h1>

                      <div
                        dangerouslySetInnerHTML={{ __html: post?.content }}
                      />
                    </div>
                    {/* End Single Post Content */}
                    {/* ======= Comments ======= */}
                    <Comments comments={comments} onReplyComment={this.postComment} type={this.state.commentType}/>
                    {/* End Comments */}
                    {/* ======= Comments Form ======= */}
                    <CommentForm onPostComment={this.postComment}/>
                    {/* End Comments Form */}
                  </>
                ) : (
                  <Error404 />
                ))}
            </div>
            <Sidebars />
          </div>
        </div>
      </section>
    );
  }
}

export default withContext(withRouter(PostDetail));
