import React, { Component } from "react";
import Copyright from "./Copyright";
import FooterTop from "./FooterTop";
import HttpClient from "../../Services/Api/HttpClient";

const client = new HttpClient();

export class Footers extends Component {
  constructor(props){
    super(props)
    this.state = {
      footers: {},
      categories: [],
      posts: []
    }
  }

  getOptions = async () => {
    const res = await client.get(client.options);
    if (res.response.ok){
      const data = res.data;
      this.getCategories(data.footers.categories.lists);
      this.getPosts(data.footers.posts.limit)
      this.setState({
        footers: data.footers
      })
    }
  }

  getCategories = async (categoryIds) => {
   
    if (categoryIds !== undefined) {
      const category = "id=" + categoryIds.join("&id=");
      const res = await client.get(client.categories + "?" + category);
      //console.log(res);
      if (res.response.ok) {
        this.setState({
          categories: res.data,
        });
      }
    }
  };

  getPosts = async (limit) => {
    const res = await client.get(client.posts, {
      _limit: limit,
      _expand: 'category',
      _sort: 'id',
      _order: 'desc'
    });
    if (res.response.ok){
      const posts = res.data;
      this.setState({
        posts: posts
      })
    }
  }

  componentDidMount = () => {
    this.getOptions();
    
  }

  render() {

    const {footers, categories, posts} = this.state;

    return (
      <footer id="footer" className="footer">
        <FooterTop {...footers} cateList={categories} postList={posts}/>
        <Copyright />
      </footer>
    );
  }
}

export default Footers;
