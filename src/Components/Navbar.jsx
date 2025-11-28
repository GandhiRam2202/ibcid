import React, { useState } from 'react';
import './Navbar.css';




const Navbar = () => {

    const handleWap = () => {
        window.open(
            "https://wa.me/+918667403826?text=Hello%20I%20want%20to%20know%20more",
            "_blank"
        );
    };


    const handleOpenMap = () => {
        window.open(
            "https://maps.app.goo.gl/aFxAg3V9eNXRsUM67", // replace with your lat/long or place
            "_blank"
        );
    };


    const handleMail = () => {
        window.location.href = "mailto:ibcidetective22@gmail.com"; // your mail id
    };


    const handleCall = () => {
        window.location.href = "tel:+918667403826"; // your phone number

    };


    return (
        <>
            <div className='container-fluid bg sticky-top'>
                <div className="col-lg-12">

                    <div className="row">

                        <div className="col-sm-12 col-lg-6 d-none d-lg-block fw-bolder mt-2 fs-1">
                            <img src='/images/logo.png' height='50' className='mb-2' />IBCID</div>


                        <div className="col-sm-12 fw-bolder d-lg-none d-sm-block text-center mt-2 fs-1">
                                <div className="row">
                            <div className="col-11">  
                            <img src='/images/logo.png' height='50' className='mb-2' />IBCID</div>
                            <div className="col-1">
<i class="bi bi-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></i></div>
                                    </div>                              
                            </div>



                        <div className="col-sm-12 col-lg-6">
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
                                    <div className="col-sm-12 col-sm-12 text-center loc d-lg-block d-none" onClick={handleMail}><i className="bi bi-envelope-fill"></i>ibcidetective22@gmail.com</div>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/*icons tab */}

                    <div className="col-sm-12 d-lg-none d-sm-block text-center">
                        <div className="row">
                            <div className="col-3" onClick={handleOpenMap}><i className="bi bi-geo-alt-fill"></i></div>
                            <div className="col-3" onClick={handleCall}><i className="bi bi-telephone-fill"></i></div>
                            <div className="col-3" onClick={handleMail}><i className="bi bi-envelope-fill"></i></div>
                            <div className="col-3" onClick={handleWap}><i class="bi bi-whatsapp"></i></div>
                        </div>
                    </div>

                <div className="col-lg-12 text-center d-none d-lg-block">
                    <div className="row">
                        <div className="col-3">Home</div>
                        <div className="col-3">Our Services</div>
                        <div className="col-3">About Us</div>
                        <div className="col-3">Contact Us</div>
                    </div>
                </div>
                    
                </div>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>


            </div>





        </>
    );
};

export default Navbar;