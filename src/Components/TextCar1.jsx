import React from 'react';
import Slider from "react-slick";



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

    const slides = [
        { text: "Your Peace, Our Mission" },
        { text: "Justice Begins With Facts" },
        { text: "We See What Others Miss" },
        { text: "Truth Delivered With Discretion" },
        { text: "Clarity Behind Every Case" },
        { text: "Truth leaves footprints" },
        { text: "Your truth. Our mission" },
        { text: "Evidence never lies" },
        { text: "We See What Others Miss" },
        { text: "Tracking Truth Relentlessly" },
        { text: "Investigating Beyond Limits" }

    ];



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