import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default class FeedCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    return (
      <FeedSlideStyled className="mt-12">
        <Slider {...settings}>
          <div className="feed-slide">
            <img
              className="feed-slide__img rounded-full"
              src="/assets/img/feed/feed1.jpg"
            />
          </div>
          <div className="feed-slide">
            <img
              className="feed-slide__img rounded-md"
              src="/assets/img/feed/feed2.jpg"
            />
          </div>
          <div className="feed-slide">
            <img
              className="feed-slide__img rounded-full"
              src="/assets/img/feed/feed3.jpg"
            />
          </div>
          <div className="feed-slide">
            <img
              className="feed-slide__img rounded-md"
              src="/assets/img/feed/feed4.jpg"
            />
          </div>
          <div className="feed-slide">
            <img
              className="feed-slide__img rounded-full"
              src="/assets/img/feed/feed5.jpg"
            />
          </div>
        </Slider>
      </FeedSlideStyled>
    );
  }
}

const FeedSlideStyled = styled.div`
  .feed-slide {
    border: none;
    padding-right: 60px;
  }
  .feed-slide:focus {
    outline: 0;
    outline: none;
  }
`;
