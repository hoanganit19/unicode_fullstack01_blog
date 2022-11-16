import React, { Component } from "react";

import HttpClient from "../../../../Services/Api/HttpClient";

import { Link } from "react-router-dom";

import Url from "../../../../Services/Helpers/Url";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

import './Slider.scss'

const client = new HttpClient();
const url = new Url();

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  getPosts = async (limit) => {
    const res = await client.get(client.posts, {
      _limit: limit,
    });
    if (res.response.ok) {
      this.setState({
        posts: res.data,
      });
    }
  };

  componentDidMount = () => {
    this.getPosts(5);
  };

  render() {
    const { posts } = this.state;
    console.log(posts);
    return (
      <section id="hero-slider" className="hero-slider">
        <div className="container-md" data-aos="fade-in">
          <div className="row">
            <div className="col-12">
              <div className="swiper sliderFeaturedPosts">
                <div className="swiper-wrapper">
                  <Swiper
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                  >
                    {posts.length > 0 &&
                      posts.map(({ id, title, excerpt, thumbnail }) => {
                        return (
                          <SwiperSlide key={id}>
                            <div className="swiper-slide">
                              <Link
                                to={url.getPost(id, title)}
                                className="img-bg d-flex align-items-end"
                                style={{
                                  backgroundImage: `url("${thumbnail}")`,
                                }}
                              >
                                <div className="img-bg-inner">
                                  <h2>{title}</h2>
                                  <p>{excerpt}</p>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
