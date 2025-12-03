import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img0 from "/images/123.jpg";
import img1 from "/images/1231.jpg";
import img2 from "/images/132.jpg";
import img3 from "/images/1321.jpg";
import img4 from "/images/143.jpg";

export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
  };

  const slides = [
    { img: img0, text: "Welcome to Our Website" },
    { img: img1, text: "Best Services in the City" },
    { img: img2, text: "Professional & Trusted Team" },
    { img: img3, text: "We Deliver Quality Work" },
    { img: img4, text: "We Deliver Quality Work" },
  ];

  return (
    <div className="container">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div className="container" key={i} style={{ position: "relative" }}>
            <img
              src={slide.img}
              alt={`slide-${i}`}
              style={{
                width: "100%",
                height: "500px",
                
                borderRadius: "25px",
              }}
            />

            {/* Text Overlay */}
           
          </div>
        ))}
      </Slider>
    </div>
  );
}
