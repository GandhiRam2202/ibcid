import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setings, slide } from "./Contact";


export default function ImageCarousel() {


  return (
    <div className="container">
      <Slider {...setings}>
        {slide.map((slide, i) => (
          <div className="container" key={i} style={{ position: "relative" }}>
            <img
              src={slide.img}
              alt={`slide-${i}`}
              style={{
                width: "100%",
                height: "550px",
                
              }}
            />

            {/* Text Overlay */}
           
          </div>
        ))}
      </Slider>
    </div>
  );
}
