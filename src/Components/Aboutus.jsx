import React from 'react';
import { Link } from 'react-router-dom';
import { handleOpenMap ,handleCall, handleMail, handleWap } from './Contact';


const Aboutus = () => {
   

    return (
        <>
             <div
                className ="container-fluid p-0"
                style={{
                    backgroundImage: "url('/images/abbsw.jpeg')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "300px",
                }}
            >
                <div
                    className ="container-fluid p-0 h-100 d-flex justify-content-center align-items-center"
                    style={{
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div className ="text-center">
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "3rem",
                                color: "white",
                            }}
                        >
                            Welcome to IBCI Detective
                        </div>

                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                color: "white",
                            }}
                        >
                            Need Assistance?
                        </div>
                        <div className ="d-flex justify-content-center text-center text-white mt-4 p-0" onClick={handleCall}>
                            <div className ="col-6 bg rounded-3">
                                <i className ="p-0 bi bi-telephone-fill">
                                    (+91)8667403826
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className ="container mt-2">
                <div className ="row">
                    <div className ="col-sm-12 text-warp col-lg-6 d-flex-column mt-2 justify-content-center align-items-center">
                        <h2>About</h2>

                        <h1 className ='text-danger mt-3 fw-bolder'>Welcome to IBCI Detective</h1>

                        <p className ='mt-4'>At <span className ='text-danger fw-bold'>IBCI Detective</span> Agency, our mission is to bring <b>clarity, confidence,</b>
                            and <b>peace</b> of mind to individuals and organizations facing uncertainty.
                            Whether it’s a <span className ="bg-warning rounded-pill px-2">personal concern, a corporate risk, or a legal requirement</span>,
                            we provide discreet and reliable investigation services tailored to your needs.</p>

                        <p>With a trained team of field investigators, analysts, and surveillance specialists,
                            we deliver accurate results through <span className ='fw-bold'>modern techniques, ethical practices, and complete
                                confidentiality.</span> We operate across Chennai , offering services including
                            <span className ='fw-bolder'> background verification, evidence collection, tracking
                                and tracing, undercover assignments, surveillance operations, and legal support investigations.</span></p>

                        <p>Our goal is simple — to protect your interests with professionalism, integrity, and
                            a commitment to absolute privacy. At <span className ='text-danger fw-bold'>IBCI Detective</span> Agency, every case is handled
                            with <span className ='fw-bold'> precision, transparency, and respect</span>, ensuring you get trustworthy information
                            when it matters most.</p>
                        <div className ="row">
                            <div className ="col-lg-6 fw-bolder">
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

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Surveillance Investigation
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Insurance Investigation
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Crime Investigation
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Money Cheating
                                    </li>
                                </ul>

                            </div>
                            <div className ="col-lg-6 fw-bolder">
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
                                        Private Detective Services
                                    </li>

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Personal Detective Services
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Service Verification
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Document Verification
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Fraud & Cheating
                                    </li>
                                </ul>
                            </div>
                            <div className ="col-sm-6 d-none d-lg-block">
                                <Link to="/Contactus" className ="btn btn-danger">
                                    Contact Us
                                </Link>
                            </div>
                            <div className ="col-sm-6 text-center d-block d-lg-none">
                                <Link to="/Contactus" className ="btn btn-danger">
                                    Contact Us
                                </Link>
                            </div>
                            <div className ="col-sm-6 text-center">
                                <div className ="row">
                                    <div className ="col-3 text-danger mt-2 p-0" onClick={handleOpenMap}><i className ="bi bi-geo-alt-fill"></i></div>
                                    <div className ="col-3 text-danger mt-2 p-0" onClick={handleCall}><i className ="bi bi-telephone-fill"></i></div>
                                    <div className ="col-3 text-danger mt-2 p-0" onClick={handleMail}><i className ="bi bi-envelope-fill"></i></div>
                                    <div className ="col-3 text-danger mt-2 p-0" onClick={handleWap}><i class ="bi bi-whatsapp"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className ="col-sm-12 text-center d-none d-lg-block p-0 col-lg-6">
                        <div className ="frame-outline">
                            <div className ="frame-bg d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/abbs2.png"
                                    alt=""
                                    className ="frame-img" style={{ height: '700px' }}
                                />
                            </div>
                        </div>


                    </div>
                    <div className ="col-sm-12 text-center d-block d-lg-none p-0 col-lg-6">
                        <div className ="frame-outline">
                            <div className ="frame-bg d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/abbs2.png"
                                    alt=""
                                    className ="frame-img" style={{ height: '500px' }}
                                />
                            </div>
                        </div>


                    </div>
                </div>

            </div>


            <div id="autoText" className="d-block d-lg-none carousel slide" data-bs-ride="carousel" data-bs-touch="true" data-bs-interval="2000" data-bs-swipe="true" data-bs-pause="false">
                <div className="txtcra carousel-inner text-white text-center p-3">
                    <div className="carousel-item active"><p className="fs-4 mt-3">Your Peace, Our Mission</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">Justice Begins With Facts</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">We See What Others Miss</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">Truth Delivered With Discretion</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">Clarity Behind Every Case</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">Truth leaves footprints</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">Your truth. Our mission</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">Evidence never lies</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">We See What Others Miss</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">Tracking Truth Relentlessly</p></div>
                    <div className="carousel-item"><p className="fs-4 mt-3">Investigating Beyond Limits</p></div>
                </div>
            </div>



            <div id="autoText"
                className="carousel mt-2 slide d-none d-lg-block"
                data-bs-ride="carousel"
                data-bs-interval="2000">

                <div className ="txtcra carousel-inner text-white text-center p-4">

                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-4 fs-4 mt-3">Your Peace, Our Mission</div>
                            <div className="col-4 fs-4 mt-3">Justice Begins With Facts</div>
                            <div className="col-4 fs-4 mt-3">We See What Others Miss</div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-6 fs-4 mt-3">Truth Delivered With Discretion</div>
                            <div className="col-6 fs-4 mt-3">Clarity Behind Every Case</div>
                        </div>
                    </div>


                    {/* Slide 3 */}
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-4 fs-4 mt-3">Truth leaves footprints</div>
                            <div className="col-4 fs-4 mt-3">Your truth. Our mission</div>
                            <div className="col-4 fs-4 mt-3">Evidence never lies</div>
                        </div>
                    </div>


                    {/* Slide 4 */}
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-6 fs-4 mt-3">Tracking Truth Relentlessly</div>
                            <div className="col-6 fs-4 mt-3">Investigating Beyond Limits</div>
                        </div>
                    </div>



                </div>
            </div>




            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-12 text-warp col-lg-6 d-flex-column mt-0 justify-content-center align-items-center">
                        <h2>Why Choose Us</h2>

                        <h1 className='text-danger fw-bolder'>Several Reasons why You Choose a Private Investigator.</h1>

                        <p className='text-success fw-bold me-2'>1. To Get the Truth</p>

                        <p className='text-success fw-bold me-2'>2. To Collect Strong Evidence</p>

                        <p className='text-success fw-bold me-2'>3. To Maintain Complete Confidentiality</p>

                        <p className='text-success fw-bold me-2'> 4. To Reduce Stress & Confusion</p>

                        <p className ='text-success fw-bold me-2'>5. For Professional Surveillance</p>

                        <p className ='text-success fw-bold me-2'> 6. To Verify Before Taking Major Decisions</p>

                        <p className ='text-success fw-bold me-2'>7. For Legal Support</p>

                        <p className ='text-success fw-bold me-2'>8. To Handle Sensitive Matters Safely</p>

                        <p className ='text-success fw-bold me-2'>9. Because Detectives Know Where to Look</p>

                        <p className ='text-success fw-bold me-2'>10. To Protect Yourself and Your Loved Ones</p>



                        <div className ="row">
                            <div className ="col-lg-6 fw-bolder">
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

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Surveillance Investigation
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Insurance Investigation
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Crime Investigation
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Money Cheating
                                    </li>
                                </ul>

                            </div>
                            <div className ="col-lg-6 fw-bolder">
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
                                        Private Detective Services
                                    </li>

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Personal Detective Services
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Service Verification
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Document Verification
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Fraud & Cheating
                                    </li>
                                </ul>
                            </div>
                            <div className ="col-sm-6 d-none d-lg-block">
                                <Link to="/Contactus" className ="btn btn-danger">
                                    Contact Us
                                </Link>
                            </div>
                            <div className ="col-sm-6 text-center d-block d-lg-none">
                                <Link to="/Contactus" className ="btn btn-danger">
                                    Contact Us
                                </Link>
                            </div>
                            <div className ="col-sm-6 text-center">
                                <div className ="row">
                                    <div className ="col-3 text-danger mt-2 p-0" onClick={handleOpenMap}><i className ="bi bi-geo-alt-fill"></i></div>
                                    <div className ="col-3 text-danger mt-2 p-0" onClick={handleCall}><i className ="bi bi-telephone-fill"></i></div>
                                    <div className ="col-3 text-danger mt-2 p-0" onClick={handleMail}><i className ="bi bi-envelope-fill"></i></div>
                                    <div className ="col-3 text-danger mt-2 p-0" onClick={handleWap}><i className="bi bi-whatsapp"></i></div>
                                </div>
                            </div>
                        </div>











                    </div>
                    <div className ="col-sm-12 text-center d-none d-lg-block p-0 col-lg-6">
                        <div className ="frame-outline">
                            <div className ="frame-bg d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/abbs3.png"
                                    alt=""
                                    className ="frame-img" style={{ height: '700px' }}
                                />
                            </div>
                        </div>


                    </div>
                    <div className ="col-sm-12 text-center d-block d-lg-none p-0 col-lg-6">
                        <div className ="frame-outline">
                            <div className ="frame-bg d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/abbs3.png"
                                    alt=""
                                    className ="frame-img" style={{ height: '500px' }}
                                />
                            </div>
                        </div>


                    </div>
                </div>

            </div>




            <div
                className ="container-fluid p-0 mt-2"
                style={{
                    backgroundImage: "url('/images/abbs4.jpeg')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "300px",
                }}
            >
                <div
                    className ="container-fluid p-0 h-100 d-flex justify-content-center align-items-center"
                    style={{
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div className ="text-center">
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "3rem",
                                color: "white",
                            }}
                        >
                            Welcome to IBCI Detective
                        </div>

                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                color: "white",
                            }}
                        >
                            Need Assistance?
                        </div>
                        <div className ="d-flex justify-content-center text-center text-white mt-4 p-0" onClick={handleCall}>
                            <div className ="col-6 bg rounded-3">
                                <i className ="p-0 bi bi-telephone-fill">
                                    (+91)8667403826
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










        </>
    );
};

export default Aboutus;