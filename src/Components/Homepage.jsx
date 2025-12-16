import React from 'react';
import '../Components/Homepage.css';
import img1 from '/images/con.png'
import Bgimg from './Bgimg';
import TextCar from './TextCar';
import { Link } from 'react-router-dom';
import BgImage from './BgImage';
import Trust from './Trust';
import { handleCall, handleOpenMap, handleWap, handleMail } from './Contact';
import ContactForm from './ContactForm';




const Homepage = () => {
    const image = img1;


    return (
        <>




            <Bgimg />




            <div className='mt-4 container'>
                <h2 className='text-danger text-center'>About IBCID</h2>
            </div>

            {/*--------------------------------------------- */}


            <div className="container mt-4">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12 p-0 col-lg-6 text-warp">
                            <h3 className='m-4'>
                                Professional Private Investigation Services
                            </h3>
                            <p className='m-4'>At <span className='text-danger fw-bolder'>IBCID-Detective</span>, we work tirelessly to bring <i><b>clarity</b></i> and <i><b>confidence</b></i> to your <b>personal, corporate,</b> and <b>legal concerns.</b> Our investigators operate with <b>complete discretion,</b> ensuring that every detail is uncovered with <b>honesty</b> and <b>precision,</b> and <b>professional integrity</b></p>

                            <p className='m-4'>With <b>years of field expertise</b> and <b>modern investigative tools</b>, we provide <b>dependable insights</b> while maintaining strict privacy, <b>legal compliance,</b> and <b>fairness</b> throughout every case.</p>

                            <p className='m-4'>
                                Our approach is <b>methodical, efficient,</b> and <b>entirely confidential</b> giving you <b>trusted</b> results when you need them most.</p>
                            <div className="container col-sm-12 col-lg-12">
                                <div className="row">
                                    <div className="col-sm-12 p-0 col-lg-6">
                                        <div className="card m-2 text-center fw-bolder" >
                                            <img className="card-img-top" src='/images/evi.jpg' />
                                            Collect All Evidance
                                        </div></div>
                                    <div className="col-sm-12 p-0 col-lg-6">
                                        <div className="card m-2 text-center fw-bolder" >
                                            <img className="card-img-top" src='/images/inv.jpeg' />
                                            Strong Investigation Team
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 p-0 col-lg-6 d-none d-lg-block">


                            <div className="frame-outline">
                                <div className="frame-bg d-flex justify-content-center align-items-center">
                                    <img
                                        src="/images/det.png"
                                        alt=""
                                        className="frame-img" style={{ height: '550px' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 p-0 col-lg-6 d-block d-lg-none">


                            <div className="frame-outline">
                                <div className="frame-bg d-flex justify-content-center align-items-center">
                                    <img
                                        src="/images/home.png"
                                        alt=""
                                        className="frame-img" style={{ height: '300px' }}
                                    />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


            </div>




            <div className="container-fluid m-0 p-0 text-center" style={{
                backgroundImage: "url('/images/home1.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100%",
            }}>
                <div className="container-fluid p-0" style={{
                    background: "rgba(0, 0, 0, 0.7)",
                }}>
                    <h4 className='font m-0 fw-bold'>Our Services</h4>
                    <h1 className='font1 text-white fw-bold'>Private Investigation Services</h1>

                    <div className="row p-0 m-0 justify-content-center">



                        <div className="col-sm-12 col-lg-3 d-flex text-center justify-content-center p-2 mb-3 fw-bold">
                            <div className="card crd1" style={{ width: "18rem" }}>

                                <h4 className="card-title mt-4 text-white">Personal Sevices</h4>
                                <div className="card-body p-0">
                                    <div className='border border-danger'>
                                        <Link className="text-decoration-none text-white" to='/Contactus'>Enquiry Now</Link></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-3 d-flex text-center justify-content-center p-2 mb-3 fw-bold">
                            <div className="card crd1" style={{ width: "18rem" }}>

                                <h4 className="card-title mt-4 text-white">Corporate Sevices</h4>
                                <div className="card-body p-0">
                                    <div className='border border-danger'>
                                        <Link className="text-decoration-none text-white" to='/Contactus'>Enquiry Now</Link></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-3 d-flex text-center justify-content-center p-2 mb-3 fw-bold">
                            <div className="card crd1" style={{ width: "18rem" }}>

                                <h4 className="card-title mt-4 text-white">Legal Sevices</h4>
                                <div className="card-body p-0">
                                    <div className='border border-danger'>
                                        <Link className="text-decoration-none text-white" to='/Contactus'>Enquiry Now</Link></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-3 d-flex text-center justify-content-center p-2 mb-3 fw-bold">
                            <div className="card crd1" style={{ width: "18rem" }}>

                                <h4 className="card-title mt-4 text-white">Special Sevices</h4>
                                <div className="card-body p-0">
                                    <div className='border border-danger'>
                                        <Link className="text-decoration-none text-white" to='/Contactus'>Enquiry Now</Link></div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

     <div className="container border border-1 shadow-lg" >
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12 p-0 col-lg-6">


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
                  className="container-fluid p-0 h-100 d-flex justify-content-center align-items-center"
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="text-center">
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                     CONTACT US
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
                    <div className="d-flex justify-content-center text-center text-white mt-4 p-0" onClick={handleCall}>
                      <div className="col-sm-12 bg rounded">
                        <i className="p-0 bi bi-telephone-fill m-1">
                          (+91)9043396037
                        </i>
                      </div>
                    </div>


                    <div className="container mt-3 text-white">
                      <div className="col-sm-12">
                        <div className="row text-center">
                          <div className="col-3 p-0" onClick={handleOpenMap}><i className="biho bi bi-geo-alt-fill"></i></div>
                          <div className="col-3 p-0" onClick={handleCall}><i className="bi biho bi-telephone-fill"></i></div>
                          <div className="col-3 p-0" onClick={handleMail}><i className="bi biho bi-envelope-fill"></i></div>
                          <div className="col-3 p-0" onClick={handleWap}><i className="bi biho bi-whatsapp"></i></div>
                        </div>
                      </div>
                    </div>




                  </div>
                </div>
              </div >





            </div>
           
            <div className="col-sm-12 col-lg-6">
              <ContactForm/>

            </div>
          </div>
        </div>
      </div>


            <div className="container-fluid p-0">
                <TextCar /></div>
            <Trust />

            <BgImage />


        </>
    );
};

export default Homepage;