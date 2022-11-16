import React, { Component } from "react";
import Sidebars from "../../Layouts/Sidebars/Sidebars";
import withContext from "../../Services/Context/withContext";
import withRouter from "../../Services/Routes/withRouter";
import PostItem from "../../Components/PostItem/PostItem";
import HttpClient from "../../Services/Api/HttpClient";
import Error404 from "../../Errors/Error404";
import Pagination from "./Pagination";

const client = new HttpClient();

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      status: "pending",
    };
  }

  getCategory = async (categoryId) => {
    const res = await client.get(client.categories + "/" + categoryId);
    if (res.response.ok) {
      this.setState({
        category: res.data,
        
      });
    }else{
        this.setState({
            status: "success"
        })
    }
  };

  componentDidMount = () => {
    const { id } = this.props.params;
    const { getPosts } = this.props.store.dispatch;
    this.getCategory(id);

    getPosts({
      categoryId: id,
    });
  };

  render() {
    const { posts } = this.props.store.data;
    const { category, status } = this.state;
   
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9" data-aos="fade-up">
            
              {
              status == "success" && 
              category == "" ? (
                <Error404 />
              ) : (
                <>
                  <h3 className="category-title">{category?.name}</h3>
                  {posts.length ? (
                    posts.map((post) => {
                      return <PostItem key={post.id} {...post} />;
                    })
                  ) : (
                    <p>Không dữ liệu</p>
                  )}
                 <Pagination />
                </>
              )}

              
            </div>
            <Sidebars />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(withContext(Posts));
