import React from 'react';
import { Link } from 'react-router-dom';


const Aboutus = () => {const handleWap = () => {
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
            <div className='container-fluid'
                style={{
                    backgroundImage: "url('/images/abbg.png')",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '500px'   // change height as needed
                }}
            >
            </div>

            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-sm-12 text-warp col-lg-6 d-flex-column mt-5 justify-content-center align-items-center">
                        <h2>About</h2>

                        <h1 className='text-danger fw-bolder'>Welcome to IBCI Detective</h1>

                        <p>At <span className='text-danger fw-bold'>IBCI Detective</span> Agency, our mission is to bring <b>clarity, confidence,</b>
                            and <b>peace</b> of mind to individuals and organizations facing uncertainty.
                            Whether it’s a <span className="bg-warning rounded-pill px-2">personal concern, a corporate risk, or a legal requirement</span>,
                            we provide discreet and reliable investigation services tailored to your needs.</p>

                        <p>With a trained team of field investigators, analysts, and surveillance specialists,
                            we deliver accurate results through <span className='fw-bold'>modern techniques, ethical practices, and complete
                                confidentiality.</span> We operate across Chennai , offering services including
                            <span className='fw-bolder'> background verification, evidence collection, tracking
                                and tracing, undercover assignments, surveillance operations, and legal support investigations.</span></p>

                        <p>Our goal is simple — to protect your interests with professionalism, integrity, and
                            a commitment to absolute privacy. At <span className='text-danger fw-bold'>IBCI Detective</span> Agency, every case is handled
                            with <span className='fw-bold'> precision, transparency, and respect</span>, ensuring you get trustworthy information
                            when it matters most.</p>



                        <div className="row">
                            <div className="col-lg-6 fw-bolder">
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Tracking People
                                    </li>

                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Divorce
                                    </li>

                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Matrimonial Investigation
                                    </li>

                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Surveillance Investigation
                                    </li>
                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Insurance Investigation
                                    </li>
                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Crime Investigation
                                    </li>
                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Money Cheating
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-6 fw-bolder">
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Post-Matrimonial Services
                                    </li>

                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Pre-Matrimonial Services
                                    </li>

                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Private Detective Services
                                    </li>

                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Personal Detective Services
                                    </li>
                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Service Verification
                                    </li>
                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Document Verification
                                    </li>
                                    <li class="d-flex align-items-center mb-2">
                                        <i class="bi bi-check text-danger me-2"></i>
                                        Fradu & Cheating
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
                            <div className="col-3 text-danger mt-2 p-0" onClick={handleWap}><i class="bi bi-whatsapp"></i></div>
                        </div>
                    </div>
                        </div>











                    </div>
                    <div className="col-sm-12 text-center d-none d-lg-block p-0 col-lg-6">
                        <div className="frame-outline">
                            <div className="frame-bg d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/abbs2.png"
                                    alt=""
                                    className="frame-img" style={{ height: '700px' }}
                                />
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-12 text-center d-block d-lg-none p-0 col-lg-6">
                        <div className="frame-outline">
                            <div className="frame-bg d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/abbs2.png"
                                    alt=""
                                    className="frame-img" style={{ height: '500px' }}
                                />
                            </div>
                        </div>


                    </div>
                </div>

            </div>


<div id="autoText" class="carousel slide" data-bs-ride="carousel" data-bs-interval="500">
  <div class="txtcra carousel-inner text-white text-center p-3">
    <div class="carousel-item active"><p class="fs-4 mt-3">Confidential Investigation Expertise</p></div>
    <div class="carousel-item"><p class="fs-4 mt-3">Professional Detective Team</p></div>
    <div class="carousel-item"><p class="fs-4 mt-3">Fast & Accurate Results</p></div>
  </div>
</div>




           


        </>
    );
};

export default Aboutus;