import React, { Component } from "react";

export class Logo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {logo} = this.props;
    
    return (
      <a href="/" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1>{logo}</h1>
      </a>
    );
  }
}

export default Logo;
