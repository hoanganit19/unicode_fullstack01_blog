import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Url from '../../Services/Helpers/Url'

const url = new Url();

export class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <Link to={url.about}>Giới thiệu</Link>
        <Link to={url.getPost(1)}>Tin tức 1</Link>
      </>

    )
  }
}

export default Home