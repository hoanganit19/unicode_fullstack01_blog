import React, { Component } from "react";
import moment from "moment";
import emailjs from "@emailjs/browser";
import config from "../../Configs/Config.json";

const {SITENAME} = config;

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmitComment = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state;

    const { onPostComment } = this.props;

    const comment = {
      name: name,
      email: email,
      message: message,
      parentId: 0,
      status: 1,
      created_at: moment().format("YYYY-MM-DD hh:mm:ss"),
      updated_at: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    onPostComment(comment);

    this.setState({
      message: "",
    });

    const templateParams = {
      name: name,
      sitename: SITENAME,
      message: message,
      email: email,
      link: window.location.href
    };

    emailjs.send("service_kl1ouie", "template_d2p2d8g", templateParams, 'K0-a5BUCAxXfsgo6y').then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  handleChangeValue = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    this.setState(data);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-lg-12">
          <h5 className="comment-title">Leave a Comment</h5>
          <form onSubmit={this.handleSubmitComment}>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <label htmlFor="comment-name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="comment-name"
                  placeholder="Enter your name"
                  name="name"
                  required
                  onChange={this.handleChangeValue}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <label htmlFor="comment-email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="comment-email"
                  placeholder="Enter your email"
                  name="email"
                  required
                  onChange={this.handleChangeValue}
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="comment-message">Message</label>
                <textarea
                  className="form-control"
                  id="comment-message"
                  placeholder="Enter your name"
                  cols={30}
                  rows={10}
                  name="message"
                  required
                  onChange={this.handleChangeValue}
                  value={message}
                />
              </div>
              <div className="col-12">
                <input
                  type="submit"
                  className="btn btn-primary"
                  defaultValue="Post comment"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
