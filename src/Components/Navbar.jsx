import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleCall, handleMail, handleWap, handleOpenMap } from './Contact';
import './Navbar.css';




const Navbar = () => {




    return (

        <div className='container-fluid bg sticky-top'>
            <div className="col-lg-12">

                <div className="row">

                    <div className="col-sm-12 col-lg-6 d-none d-lg-block fw-bolder mt-2 fs-1">
                        <img src='/images/logo.png' height='50' className='mb-2' />IBCID</div>


                    <div className="col-sm-12 fw-bolder d-lg-none d-sm-block text-center mt-2 fs-1">
                        <div className="row">
                            <div className="col-11">
                                <img src='/images/logo.png' height='50' className='mb-2 p-0' />IBCID</div>
                            <div className="col-1 p-0">
                                <i className="bi bi-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></i></div>
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
                        <div className="col-3 p-0" onClick={handleWap}><i className="bi bi-whatsapp"></i></div>
                    </div>
                </div>

                <div className="col-lg-12 text-center d-none d-lg-block">
                    <div className="row">
                        <div className="col-3"><Link className="nav-link-custom fw-bold" to='/'>Home</Link></div>

                        <div className="col-3 d-flex justify-content-center dropdown">
                            <div className="dropdown-toggle fw-bold nav-link-custom" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our Services
                            </div>
                            <ul className="col-6 dropdown-menu">
                                <li><a className="dropdown-item" href="#">Personal Sevices</a></li>
                                <li><a className="dropdown-item" href="#">Corporate Services</a></li>
                                <li><a className="dropdown-item" href="#">Legal Services</a></li>
                                <li><a className="dropdown-item" href="#">Special Services</a></li>
                            </ul>
                        </div>
                        <div className="col-3"><Link className="nav-link-custom fw-bold" to='/Aboutus'>About Us</Link></div>
                        <div className="col-3"><Link className="nav-link-custom fw-bold" to='/Contactus'>Contact Us</Link></div>
                    </div>
                </div>

            </div>

            {/*------offcanvas-------------*/}

            <div className="offcanvas offcanvas-start myCanvas" data-bs-scroll="true"
                tabIndex="-1" id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">

                <div className="offcanvas-header">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-10">
                                <h2 className="offcanvas-title text-center text-danger" id="offcanvasWithBothOptionsLabel"><img src='/images/logo.png' height='50' className='mb-2 p-0' />IBCID</h2>
                            </div>
                            <div type="button col-4" className="btn-close btn-close-white mt-2 text-danger" data-bs-dismiss="offcanvas" aria-label="Close"></div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-body text-center fw-bold">


                    <div data-bs-dismiss="offcanvas"><Link className='nav-link-custom' to='/'>Home</Link></div>
                   
                        <div className="dropdown-toggle fw-bold nav-link-custom" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Our Services
                        </div>
                        <ul className="col-6 text-center dropdown-menu bg">
                            <li><Link data-bs-dismiss="offcanvas" className='nav-link-custom' to='/Personal'>Personal Sevices</Link></li>
                            <li><Link data-bs-dismiss="offcanvas" className='nav-link-custom' to='/Corporate'>Corporate Sevices</Link></li>
                            <li><Link data-bs-dismiss="offcanvas" className='nav-link-custom' to='/Legal'>Legal Sevices</Link></li>
                            <li><Link data-bs-dismiss="offcanvas" className='nav-link-custom' to='/Special'>Special Sevices</Link></li>
                            
                        </ul>


                    <div data-bs-dismiss="offcanvas"><Link className='nav-link-custom' to='/Aboutus'>About Us</Link></div>
                    <div data-bs-dismiss="offcanvas"><Link className='nav-link-custom' to='/Contactus'>Contact Us</Link></div>




                </div>
            </div>


        </div>






    );
};

export default Navbar;