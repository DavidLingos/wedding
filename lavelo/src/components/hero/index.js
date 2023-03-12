import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


class SimpleSlider extends Component {
    render() {
      var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2500,
        fade:true
      };
      return (
        <Slider {...settings}>
          <div id="home" className="item1">
              <div className="container">
                  <div className="slide-content">
                      <div className="slide-title">
                          <h2>Budeme se brát</h2>
                      </div>
                      <div className="slide-subtitle">
                          <h4>2. září 2023 ve 13 hodin</h4>
                      </div>
                  </div>
              </div>
          </div>
          {/* <div className="item2">
            <div className="container">
                <div className="container">
                      <div className="slide-content">
                        <div className="slide-subtitle">
                            <h4>Budeme se brát</h4>
                        </div>
                        <div className="slide-title">
                            <h2>Uložte si datum</h2>
                        </div>
                        <div className="slide-text">
                            <p>2. září 2023</p>
                        </div>
                      </div>
                    </div>
                </div>
          </div> */}
        </Slider>
      );
    }
  }

export default SimpleSlider;