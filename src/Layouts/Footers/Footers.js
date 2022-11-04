import React, { Component } from "react";
import Copyright from "./Copyright";
import FooterTop from "./FooterTop";

export class Footers extends Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <FooterTop />
        <Copyright />
      </footer>
    );
  }
}

export default Footers;
