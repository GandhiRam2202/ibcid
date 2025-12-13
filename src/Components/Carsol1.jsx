import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slidesImage, setting } from "./Contact";

export default function ImageCarousel() {

  return (
    <div className="mt-2 container">
      <Slider {...setting}>
        {slidesImage.map((slide, i) => (
          <div className="container" key={i}>
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
