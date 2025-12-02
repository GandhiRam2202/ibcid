import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <div className='container-fluid bg fixed-top'>
                <div className="col-lg-12">

                    <div className="row">

                        <div className="col-sm-12 col-lg-6 d-none d-lg-block fw-bolder mt-2 fs-1">
                            <img src='/images/logo.png' height='50' className='mb-2' />IBCID</div>


                        <div className="col-sm-12 fw-bolder d-lg-none d-sm-block text-center mt-2 fs-1">
                            <div className="row">
                                <div className="col-11">
                                    <img src='/images/logo.png' height='50' className='mb-2 p-0' />IBCID</div>
                                <div className="col-1 p-0">
                                    <i class="bi bi-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></i></div>
                            </div>
                        </div>



                        <div className="col-sm-12 col-lg-6 mt-2">
                            <div className="row">
                                <div className="col-6 text-center d-lg-block d-none" onClick={handleOpenMap}>
                                    <div>
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div className='loc'>Chromepet, Chennai - 600044</div>
                                </div>


                                <div className="col-6">
                                    <div className="col-sm-12 col-lg-12 text-center p-0 mt-2 loc d-lg-block d-none" onClick={handleCall}><i className="bi bi-telephone-fill"></i>
                                        +91-8667403826
                                    </div>
                                    <div className="col-sm-12 col-sm-12 text-center p-0 mt-2 loc d-lg-block d-none" onClick={handleMail}><i className="bi bi-envelope-fill"></i>ibcidetective22@gmail.com</div>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/*icons tab */}

                    <div className="col-sm-12 d-lg-none d-sm-block text-center">
                        <div className="row">
                            <div className="col-3 p-0" onClick={handleOpenMap}><i className="bi bi-geo-alt-fill"></i></div>
                            <div className="col-3 p-0" onClick={handleCall}><i className="bi bi-telephone-fill"></i></div>
                            <div className="col-3 p-0" onClick={handleMail}><i className="bi bi-envelope-fill"></i></div>
                            <div className="col-3 p-0" onClick={handleWap}><i class="bi bi-whatsapp"></i></div>
                        </div>
                    </div>

                    <div className="col-lg-12 text-center d-none d-lg-block">
                        <div className="row">
                            <div className="col-3"><Link className="nav-link-custom" to='/'>Home</Link></div>

                            <div className="col-3 d-flex justify-content-center dropdown">
                                <div class="dropdown-toggle nav-link-custom" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </div>
                                <ul class="col-6 dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Personal Sevices</a></li>
                                    <li><a class="dropdown-item" href="#">Corporate Services</a></li>
                                    <li><a class="dropdown-item" href="#">Legal Services</a></li>
                                    <li><a class="dropdown-item" href="#">Special Services</a></li>
                                    <li><a class="dropdown-item" href="#">SPY Camera</a></li>
                                    <li><a class="dropdown-item" href="#">SPY Software</a></li>
                                </ul>
                            </div>
                            <div className="col-3"><Link className="nav-link-custom" to='/Carsol'>About Us</Link></div>
                            <div className="col-3"><Link className="nav-link-custom" to='/'>Contact Us</Link></div>
                        </div>
                    </div>

                </div>

                {/*------offcanvas-------------*/}

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-10">
                                    <h2 className="offcanvas-title text-center text-danger" id="offcanvasWithBothOptionsLabel"><img src='/images/logo.png' height='50' className='mb-2 p-0' />IBCID</h2>
                                </div>
                                <div type="button col-4" className="btn-close mt-2 text-danger" data-bs-dismiss="offcanvas" aria-label="Close"></div>
                            </div>
                        </div>
                    </div>
                    <div class="offcanvas-body text-danger">


                        <div><Link to='/'>Home</Link></div>
                        <Link to='/Carsol'>Services</Link>

                        <div className="">About Us</div>
                        <div className="">Contact Us</div>

                    </div>
                </div>


            </div>





        </>
    );
};

export default Navbar;