import React, { Component } from "react";
import withContext from "../../Services/Context/withContext";
import withRouter from "../../Services/Routes/withRouter";
import Sidebars from "../../Layouts/Sidebars/Sidebars";
import PostItem from "../../Components/PostItem/PostItem";
import Error404 from "../../Errors/Error404";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.isKeyword = true;
  }

  componentDidMount = () => {
    let { keyword } = this.props.store.data;
    const { getPosts } = this.props.store.dispatch;
    const [searchParams] = this.props.search;
    if (searchParams.get("keyword")) {
      keyword = searchParams.get("keyword");
    }

    getPosts({
      q: keyword,
    });
  };

  //Chạy khi search lần 2
  componentDidUpdate = (prevProps, prevState) => {
    const { keyword } = this.props.store.data;
    const { getPosts } = this.props.store.dispatch;
    if (prevProps.store.data.keyword !== keyword) {
      getPosts({
        q: keyword,
      });
    }
  };

  render() {
    const { posts, keyword } = this.props.store.data;
    const [searchParams] = this.props.search;

    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9" data-aos="fade-up">
              {!searchParams.has("keyword") ? (
                <Error404 />
              ) : (
                <>
                  <h3 className="category-title">Search: {keyword}</h3>
                  {posts.length ? (
                    posts.map((post) => {
                      return <PostItem key={post.id} {...post} />;
                    })
                  ) : (
                    <p>Không dữ liệu</p>
                  )}
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

export default withRouter(withContext(Search));
