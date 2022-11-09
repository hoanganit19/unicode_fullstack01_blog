import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  getMenus = (menus) => {
    return (
      <ul>
        {menus?.length > 0 &&
          menus.map(({ link, title, children }, index) => {
            let menuItem = (
              <li key={index}>
                <NavLink to={link}>{title}</NavLink>
              </li>
            );

            if (children) {
              menuItem = (
                <li className="dropdown" key={index}>
                  <a href={link}>
                    <span>{title}</span>
                    <i className="bi bi-chevron-down dropdown-indicator" />
                  </a>
                  {this.getMenus(children)}
                </li>
              );
            }
            return menuItem;
          })}
      </ul>
    );
  };

  render() {
    const { menus } = this.props;

    return (
      <nav id="navbar" className="navbar">
        {this.getMenus(menus)}
        {/* <ul>
          <li>
            <a href="index.html">Blog</a>
          </li>
          <li>
            <a href="single-post.html">Single Post</a>
          </li>
          <li className="dropdown">
            <a href="category.html">
              <span>Categories</span>{" "}
              <i className="bi bi-chevron-down dropdown-indicator" />
            </a>
            <ul>
              <li>
                <a href="search-result.html">Search Result</a>
              </li>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul> */}
      </nav>
    );
  }
}

export default Navigation;
