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
                }}
            >
                <div
                    className="container-fluid p-0 h-100"
                    style={{
                        background: "rgba(0, 0, 0, 0.85)",
                    }}
                >
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
                                <p className='p-0' style={{
                                    fontWeight: "bold",
                                    fontSize: "0.8rem",
                                    color: "white",
                                }}></p>
                                <div className="col-12">
                                <Link className="text-decoration-none text-white" to='/'><i class="text-danger bi bi-arrow-right"></i>Home</Link>
                                </div>
                                <div className="col-12">
                                <Link className="text-decoration-none text-white" to='/Aboutus'><i class="text-danger bi bi-arrow-right"></i>About Us</Link>
                                </div>
                                <div className="col-12">
                                <Link className="text-decoration-none text-white" to='/Contactus'><i class="text-danger bi bi-arrow-right"></i>Contact Us</Link>
                                </div>




                            </div>
                            <div className="col-sm-12 mt-3 col-lg-3">parthi</div>
                            <div className="col-sm-12 mt-3 col-lg-3">parthi</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;