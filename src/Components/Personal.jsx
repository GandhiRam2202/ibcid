import React from 'react';
import BgImage from './BgImage';
import { Link } from 'react-router-dom';
import { handleOpenMap, handleCall, handleMail, handleWap } from './Contact';
import TextCar from './TextCar';


const Personal = () => {
    return (
        <>
            <BgImage />
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-12 text-center d-none d-lg-block p-0 col-lg-6">
                        <div className="frame-outline">
                            <div className="frame-bg1 d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/track.png"
                                    alt=""
                                    className="frame-img" style={{ height: '600px' }}
                                />
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-12 text-center d-block d-lg-none p-0 col-lg-6">
                        <div className="frame-outline">
                            <div className="frame-bg1 d-flex  justify-content-center align-items-center">
                                <img
                                    src="/images/track.png"
                                    alt=""
                                    className="frame-img" style={{ height: '500px' }}
                                />
                            </div>
                        </div>


                    </div>

                    <div className="col-sm-12 text-warp col-lg-6 d-flex-column mt-2 justify-content-center align-items-center">
                        <h1 className='text-danger'>Personal Services</h1>



                        <div className="row">
                            <div className="col-lg-6 fw-bolder">
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Tracking People
                                    </li>

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Divorce
                                    </li>

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Matrimonial Investigation
                                    </li>





                                </ul>

                            </div>
                            <div className="col-lg-6 fw-bolder">
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Post-Matrimonial Services
                                    </li>

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Pre-Matrimonial Services
                                    </li>



                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Personal Detective Services
                                    </li>



                                </ul>
                            </div>
                            <div className="col-sm-6 d-none d-lg-block">
                                <Link to="/Contactus" className="btn btn-danger">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="col-sm-6 text-center d-block d-lg-none">
                                <Link to="/Contactus" className="btn btn-danger">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="col-sm-6 text-center">
                                <div className="row">
                                    <div className="col-3 text-danger mt-2 p-0" onClick={handleOpenMap}><i className="bi bi-geo-alt-fill"></i></div>
                                    <div className="col-3 text-danger mt-2 p-0" onClick={handleCall}><i className="bi bi-telephone-fill"></i></div>
                                    <div className="col-3 text-danger mt-2 p-0" onClick={handleMail}><i className="bi bi-envelope-fill"></i></div>
                                    <div className="col-3 text-danger mt-2 p-0" onClick={handleWap}><i className="bi bi-whatsapp"></i></div>
                                </div>
                            </div>
                        </div>

                        <p className='mt-4 fw-bold'>⭐ Tracking People – Find Anyone, Anytime With 100% Confidentiality</p>

                        <p> At <span className='text-danger fw-bold'>IBCI Detective</span>, we specialize in locating and tracking individuals
                            with absolute privacy and accuracy. Whether someone has gone missing, avoiding
                            repayment, hiding the truth, or simply cannot be reached, our expert investigators
                            use advanced surveillance methods to trace their movements and provide you with reliable,
                            real-time information.</p>

                        <p className='fw-bold'> 🔍 When Do You Need Our Tracking People Service? </p>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Missing or runaway individuals</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ People involved in money cheating or fraud</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Spouse or partner with suspicious behaviour</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Employees or business associates avoiding communication</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Individuals who owe money or disappeared suddenly</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Locating old friends, relatives, or contacts</li>

                    </div>

                </div>

            </div>
                <TextCar/>
            <div className="container-fluid p-0"
                style={{
                    backgroundImage: "url('/images/con.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                }}>
                <div className="container-fluid m-0 p-0" style={{
                    background: "rgba(0, 0, 0, 0.8)",
                }}>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-sm-12 p-0 col-lg-6">
                                <p className='fw-bold text-danger fs-5 mt-3'>🛡️ Why Clients Trust Us</p>
                                <p className="fw-bold text-white mb-2">
                                    Complete confidentiality </p>
                                <p className="fw-bold text-white  mb-2">
                                    Accurate & verified information</p>
                                <p className="fw-bold text-white  mb-2">
                                    Real-time updates and reports</p>
                                <p className="fw-bold text-white  mb-2">
                                    Legal & ethical investigation methods</p>
                                <p className="fw-bold text-white  mb-2">
                                    Experienced and certified detectives</p>
                            </div>
                            <div className="col-sm-12 m-0  p-0 col-lg-6">

                                <p className='fw-bold text-danger fs-5 mt-3'>🚀 How We Work</p>
                                <p className="fw-bold text-white mb-2">
                                    On-ground surveillance </p>
                                <p className="fw-bold text-white  mb-2">
                                    Digital footprint tracing</p>
                                <p className="fw-bold text-white  mb-2">
                                    Background verification</p>
                                <p className="fw-bold text-white  mb-2">
                                    Local enquiry</p>
                                <p className="fw-bold text-white  mb-2">
                                    Movement monitoring</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Personal;