import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Logo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {logo} = this.props;
    
    return (
      <Link to="/" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1>{logo}</h1>
      </Link>
    );
  }
}

export default Logo;
