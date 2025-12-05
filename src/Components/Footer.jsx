import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
            <div
                className="container-fluid p-0"
                style={{
                    backgroundImage: "url('/images/con.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                }}>
                <div
                    className="container-fluid p-0 h-100"
                    style={{
                        background: "rgba(0, 0, 0, 0.85)",
                    }}>
                    <div className="container text-white">
                        <div className="row">
                            <div className="col-sm-12 mt-3 col-lg-3">
                                <h4>Our Aim</h4>
                                <p className='p-0' style={{
                                    fontWeight: "bold",
                                    fontSize: "0.8rem",
                                    color: "white",
                                }}>
                                    Our Team Of Detectives Provides Services
                                    For Verification, Tracking, Tracing, Fact
                                    Finding, Undercover Operation, Surveillance,
                                    Litigation Support
                                </p>

                                <div className="col-sm-12">
                                    <div className="row text-center">
                                        <div className="col-3 p-0" onClick={handleOpenMap}><i className="bi bi-geo-alt-fill"></i></div>
                                        <div className="col-3 p-0" onClick={handleCall}><i className="bi bi-telephone-fill"></i></div>
                                        <div className="col-3 p-0" onClick={handleMail}><i className="bi bi-envelope-fill"></i></div>
                                        <div className="col-3 p-0" onClick={handleWap}><i class="bi bi-whatsapp"></i></div>
                                    </div>
                                </div>
                            </div>




                            <div className="col-sm-12 mt-3 col-lg-3">
                                <h4>Quick Links</h4>
                                <div className="col-12">
                                    <Link className="text-decoration-none text-white" to='/'><i class="text-danger bi bi-arrow-right"></i> Home</Link>
                                </div>
                                <div className="col-12">
                                    <Link className="text-decoration-none text-white" to='/Aboutus'><i class="text-danger bi bi-arrow-right"></i> About Us</Link>
                                </div>
                                <div className="col-12">
                                    <Link className="text-decoration-none text-white" to='/Contactus'><i class="text-danger bi bi-arrow-right"></i> Contact Us</Link>
                                </div>
                            </div>



                            <div className="col-sm-12 mt-3 col-lg-3">
                                <h4>Our Services</h4>

                                <div className="col-12">
                                    <Link className="text-decoration-none text-white" to='/'><i class="text-danger bi bi-arrow-right"></i> Personal Services</Link>
                                </div>
                                <div className="col-12">
                                    <Link className="text-decoration-none text-white" to='/Aboutus'><i class="text-danger bi bi-arrow-right"></i> Corporate Services</Link>
                                </div>
                                <div className="col-12">
                                    <Link className="text-decoration-none text-white" to='/Contactus'><i class="text-danger bi bi-arrow-right"></i> Special Services</Link>
                                </div>
                                <div className="col-12">
                                    <Link className="text-decoration-none text-white" to='/Contactus'><i class="text-danger bi bi-arrow-right"></i> Legal Services</Link>
                                </div>
                                <div className="col-12">
                                    <Link className="text-decoration-none text-white" to='/Contactus'><i class="text-danger bi bi-arrow-right"></i> Spy Cameras</Link>
                                </div>
                                <div className="col-12">
                                    <Link className="text-decoration-none text-white" to='/Contactus'><i class="text-danger bi bi-arrow-right"></i> Spy Softwares</Link>
                                </div>

                            </div>





                            <div className="col-sm-12 mt-3 col-lg-3">
                                <h4>Contact</h4>
                                <div className="col-12 p-1" style={{
                                    fontWeight: "bold",
                                    fontSize: "0.8rem",
                                    color: "white",
                                }}
                                    onClick={handleOpenMap}>
                                    <p className='m-0'><i className="bi bi-geo-alt-fill"></i> SRI BALAVINAYAGA APARTMENT</p>
                                    <p className='m-0'>No. 77, B/S1, Second Floor, 5th Main Road,</p>
                                    <p className='m-0'>Purushothaman Nagar, </p><p className='m-0'>Chromepet, Chennai - 600 044.</p></div>
                                <div className="col-12 p-1" onClick={handleMail}><i className="bi bi-envelope-fill"></i> ibcidetective22@gmail.com</div>
                                <div className="col-12" onClick={handleCall}><i className="bi bi-telephone-fill"></i> (+91)8667403826</div>
                                <div className="col-12 p-1" onClick={handleWap}><i class="bi bi-whatsapp"> Whatsapp</i></div>
                            </div>
                        </div>
                    </div>


                    <div className="container text-center">
                        <hr className='text-white' />
                        <div className="row">
                            <div className='col-sm-12 col-lg-6 mb-2 text-white'>Copyright 2025 by IBCID-Detectives All Rights Reserved</div>
                            <div className='col-sm-12 col-lg-6 text-white'
                                onClick={() => window.open("https://www.linkedin.com/in/parthiban-ramachandiran/", "_blank")}
                                style={{ cursor: "pointer" }}
                            >
                                Designed And Developed
                            </div>

                            <hr className='text-white mt-2' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;