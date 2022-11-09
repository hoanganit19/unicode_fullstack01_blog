import React, { Component, createRef } from "react";
import withContext from '../../Services/Context/withContext';
import withRouter from '../../Services/Routes/withRouter';
import Url from '../../Services/Helpers/Url';

const url = new Url();

export class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
    this.closeRef = createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {keyword} = this.state;
    const {updateKeyword} = this.props.store.dispatch;
    updateKeyword(keyword); //Cập nhật keyword lên Global State

    //Chuyển trang
    const params = {
      keyword: keyword
    }
    const searchPath = url.search+'?'+(new URLSearchParams(params).toString())
    const {navigate} = this.props;
   
    navigate(searchPath);

    this.closeRef.current.click();
  }

  handleChangeValue = (e) => {
    this.setState({
      keyword: e.target.value
    })
  };

  componentDidMount = () => {
    const [searchParams] = this.props.search; //đọc từ url
    if (searchParams.get('keyword')){
      this.setState({
        keyword: searchParams.get('keyword')
      })
    }
  }

  render() {
    const { socials } = this.props;
    const {keyword} = this.state;
    return (
      <div className="position-relative">
        <a href={socials?.facebook} className="mx-2">
          <span className="bi-facebook" />
        </a>
        <a href={socials?.twitter} className="mx-2">
          <span className="bi-twitter" />
        </a>
        <a href={socials?.intagram} className="mx-2">
          <span className="bi-instagram" />
        </a>
        <a href="#" className="mx-2 js-search-open">
          <span className="bi-search" />
        </a>
        <i className="bi bi-list mobile-nav-toggle" />
        {/* ======= Search Form ======= */}
        <div className="search-form-wrap js-search-form-wrap">
          <form action="" className="search-form" onSubmit={this.handleSubmit}>
            <span className="icon bi-search" />
            <input
              type="text"
             
              onChange={this.handleChangeValue}
              placeholder="Search"
              className="form-control"
              value={keyword}
            />
            <button type="submit" className="d-none"></button>
            <button className="btn js-search-close" ref={this.closeRef}>
              <span className="bi-x" />
            </button>
          </form>
        </div>
        {/* End Search Form */}
      </div>
    );
  }
}

export default withRouter(withContext(Social));
