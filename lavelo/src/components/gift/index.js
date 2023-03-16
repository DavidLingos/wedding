import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gift1 from '../../images/gift/2.png'
import gift2 from '../../images/gift/3.png'
import gift3 from '../../images/gift/4.png'
import gift4 from '../../images/gift/2.png'
import './style.css'


class Gift extends Component {
    render() {
      var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
          <div className="gift-area">
              <div className="container">
                    <div className="col-12">
                      <div className="section-title text-center">
                          <h2>Svatební dary</h2>
                          <p>Největším dárkem pro nás bude, když tento den strávíte s námi a užijete si ho. Pokud byste nás i přesto chtěli obdarovat, budeme rádi za jakýkoliv finanční příspěvek na naši společnou budoucnost či svatební oslavu.</p>
                      </div>
                  </div>
              </div>
          </div>
      );
    }
  }

export default Gift;