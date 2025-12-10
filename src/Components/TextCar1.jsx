import React from 'react';
import Slider from "react-slick";
import { slides } from './Contact';



const TextCar1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: false,
    };

    



    return (
        <div className="container">
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div className="text-center text-white" key={i}>
                        <div className='col-sm-12 txtcra fs-4 fw-bold'>

                            {slide.text}

                        </div>

                        {/* Text Overlay */}

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TextCar1;