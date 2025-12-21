import React from 'react';
import { Link } from 'react-router-dom';
import { handleOpenMap, handleCall, handleMail, handleWap, linkedIn } from './Contact';

const Footer = () => {

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

                                <div className="container">
                                    <div className="col-sm-12">
                                        <div className="row text-center">
                                            <div className="col-3 p-0" onClick={handleOpenMap}><i className="bi biho bi-geo-alt-fill"></i></div>
                                            <div className="col-3 p-0" onClick={handleCall}><i className="bi biho bi-telephone-fill"></i></div>
                                            <div className="col-3 p-0" onClick={handleMail}><i className="bi biho bi-envelope-fill"></i></div>
                                            <div className="col-3 p-0" onClick={handleWap}><i className="bi biho bi-whatsapp"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-sm-12 mt-3 col-lg-3">
                                <h4>Quick Links</h4>
                                <div className="col-12">
                                    <i className="click-wrap">👉</i><Link className="text-decoration-none p-2 text-white" to='/'> Home</Link>
                                </div>
                                <div className="col-12">
                                    <i className="click-wrap">👉</i><Link className="text-decoration-none p-2 text-white" to='/Aboutus'> About Us</Link>
                                </div>
                                <div className="col-12">
                                    <i className="click-wrap">👉</i><Link className="text-decoration-none p-2 text-white" to='/Contactus'> Contact Us</Link>
                                </div>
                            </div>



                            <div className="col-sm-12 mt-3 col-lg-3">
                                <h4>Our Services</h4>

                                <div className="col-12">
                                    <i className="click-wrap">👉</i><Link className="text-decoration-none p-2 text-white" to='/Personal'> Personal Services</Link>
                                </div>
                                <div className="col-12">
                                    <i className="click-wrap">👉</i><Link className="text-decoration-none p-2 text-white" to='/Corporate'> Corporate Services</Link>
                                </div>
                                <div className="col-12">
                                    <i className="click-wrap">👉</i><Link className="text-decoration-none p-2 text-white" to='/Special'> Special Services</Link>
                                </div>
                                <div className="col-12">
                                    <i className="click-wrap">👉</i><Link className="text-decoration-none p-2 text-white" to='/Legal'> Legal Services</Link>
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
                                <div className="col-12" onClick={handleCall}><i className="bi bi-telephone-fill"></i> (+91)9043396037</div>
                                <div className="col-12 p-1" onClick={handleWap}><i className="bi bi-whatsapp"> Whatsapp</i></div>
                            </div>
                        </div>
                    </div>


                    <div className="container text-center">
                        <hr className='text-white' />
                        <div className="row">
                            <div className='col-sm-12 col-lg-6 mb-2 text-white'>Copyright {new Date().getFullYear()} @ IBCID-Detectives All Rights Reserved</div>
                            <div className='col-sm-12 col-lg-6 text-white'
                                onClick={linkedIn}

                            >
                                <p className='mb-0'>Designed And Developed</p>
                                <p className='mb-0'>GandhiRamParthi</p>
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