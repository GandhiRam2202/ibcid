import React, { useState } from 'react';
import './Navbar.css';




const Navbar = () => {


     const handleOpenMap = () => {
    window.open(
      "https://maps.app.goo.gl/aFxAg3V9eNXRsUM67", // replace with your lat/long or place
      "_blank"
    );
  };


    const handleMail = () => {
        window.location.href = "mailto:ibcidective@gmail.com"; // your mail id
    };


    const handleCall = () => {
        window.location.href = "tel:+918667403826"; // your phone number
       
    };


    return (
        <>
            <div className='container-fluid bg'>
                <div className="col-lg-12">

                    <div className="row">

                        <div className="col-sm-6 fw-bolder mt-2 fs-1">
                            <img src='./src/assets/logo.png' height='50' className='mb-2'/>IBCID</div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6 text-center d-lg-block d-none" onClick={handleOpenMap}>
                                    <div>
                                        <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div className='loc'>Chromepet, Chennai - 600044</div>
                                </div>
                              

                                <div className="col-6">
                                    <div className="col-sm-12 col-lg-12 text-center loc d-lg-block d-none" onClick={handleCall}><i className="bi bi-telephone-fill"></i>
                                        +91-8667403826
                                    </div>
                                    <div className="col-sm-12 col-sm-12 text-center loc d-lg-block d-none" onClick={handleMail}><i className="bi bi-envelope-fill"></i>ibcidective@gmail.com</div>
                                   
                                </div>
                                
                            </div>


                        </div>
                    </div>
                </div>


            </div>





        </>
    );
};

export default Navbar;