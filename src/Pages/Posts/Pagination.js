import React, { Component } from "react";

export class Pagination extends Component {
  render() {
    return (
      <div className="text-start py-4">
        <div className="custom-pagination">
          <a href="#" className="prev">
            Prevous
          </a>
          <a href="#" className="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#" className="next">
            Next
          </a>
        </div>
      </div>
    );
  }
}

export default Pagination;
