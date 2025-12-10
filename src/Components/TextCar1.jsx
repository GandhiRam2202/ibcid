import React from 'react';
import Slider from "react-slick";
import { slides, settings } from './Contact';



const TextCar1 = () => {
 

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