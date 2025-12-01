import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img0 from "/images/img0.jpg";
import img1 from "/images/img1.jpeg";
import img2 from "/images/img2.jpeg";
import img3 from "/images/img3.png";
import img4 from "/images/img4.jpg";

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
    pauseOnHover: true,
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
          <div key={i} style={{ position: "relative" }}>
            <img
              src={slide.img}
              alt={`slide-${i}`}
              style={{
                width: "100%",
                height: "550px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            {/* Text Overlay */}
           
          </div>
        ))}
      </Slider>
    </div>
  );
}
