import React, { Component } from "react";
import moment from "moment";

export class CommentReplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmitReply = (e) => {
    e.preventDefault();
    const { commentId, onReplyComment } = this.props;
    const {name, email, message} = this.state;
    const comment = {
      name: name,
      email: email,
      message: message,
      parentId: parseInt(commentId),
      status: 1,
      created_at: moment().format("YYYY-MM-DD hh:mm:ss"),
      updated_at: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    onReplyComment(comment, 'reply');
    
    this.setState({
        message: ''
    })
  };

  handleChangeValue = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    this.setState(data);
  };

  render() {
    const {name, email, message} = this.state;
    return (
      <form onSubmit={this.handleSubmitReply}>
        <div className="row">
          <div className="col-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
              name="name"
              onChange={this.handleChangeValue}
              value={name}
            />
          </div>
          <div className="col-6 mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              name="email"
              onChange={this.handleChangeValue}
              value={email}
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Reply"
              required
              name="message"
              onChange={this.handleChangeValue}
              value={message}
            />
          </div>
        </div>
        <button type="submit" className="d-none"></button>
      </form>
    );
  }
}

export default CommentReplyForm;
