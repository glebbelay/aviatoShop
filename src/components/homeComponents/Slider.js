import React, { useEffect } from "react";
import slider1 from "../../images/slider/slider-3.jpg";

import "../../plugins/slick/slick.css";
import "../../plugins/animate/animate.css";
import "../../plugins/slick/slick-theme.css";
import "../../scss/templates/_slider.scss";

import $ from "../../plugins/jquery/dist/jquery.js";
import "../../plugins/slick/slick.min.js";

function Slider() {
  useEffect(() => {
    const slider = $(".hero-slider").slick({
      centerMode: true, // Center the slides
      centerPadding: "0",
      autoplay: true,
      infinite: true,
      arrows: true,
      prevArrow:
        "<button type='button' className='heroSliderArrow prevArrow tf-ion-chevron-left'></button>",
      nextArrow:
        "<button type='button' className='heroSliderArrow nextArrow tf-ion-chevron-right'></button>",
      dots: true,
      autoplaySpeed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      speed: 300, // Animation speed
      cssEase: "linear", // Easing for the transition
      useTransform: true, // Use CSS transform
      adaptiveHeight: true, // Adjust slide height based on content
    });

    function animateSlide() {
      $(".hero-slider .slider-item")
        .find("p, h1, a")
        .removeClass("animated fadeInUp")
        .css("opacity", 0);

      setTimeout(() => {
        console.log($("[tabindex='0']"));
        // console.log($("[tabindex='0']").find("p, h1, a"));
        $("[tabindex='0']").find("p, h1, a").addClass("animated fadeInUp");
      }, 10);
    }

    slider.on("afterChange", (event, slick, currentSlide, nextSlide) => {
      // $(
      //   ".hero-slider .slider-item p, .hero-slider .slider-item h1, .hero-slider .slider-item a"
      // )
      animateSlide();
    });

    animateSlide();
  });

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div className="hero-slider">
        <div
          className="slider-item th-fullpage hero-area"
          srs={slider1}
          alt="slider"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-center">
                <p>PRODUCTS</p>
                <h1>
                  The beauty of nature <br /> is hidden in details.
                </h1>
                <a className="btn" href="shop.html">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item th-fullpage hero-area"
          srs={slider1}
          alt="slider"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-left">
                <p>PRODUCTS</p>
                <h1>
                  The beauty of nature <br /> is hidden in details.
                </h1>
                <a className="btn" href="shop.html">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item th-fullpage hero-area"
          srs={slider1}
          alt="slider"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-right">
                <p>PRODUCTS</p>
                <h1>
                  The beauty of nature <br /> is hidden in details.
                </h1>
                <a className="btn" href="shop.html">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
