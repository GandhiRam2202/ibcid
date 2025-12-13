import React from 'react';
import Carsol from './Carsol'
import Carsol1 from './Carsol1'
import '../Components/Homepage.css';
import img1 from '/images/con.png'
import BgImage from './BgImage';
import TextCar from './TextCar';




const Homepage = () => {
    const image = img1;


    return (
        <>




            <div className="container d-none d-lg-block">
                <Carsol />
            </div>
            <div className="container d-lg-none d-sm-block">
                <Carsol1 />
            </div>




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
                            <p className='m-4'>At <span className='text-danger fw-bolder'>IBCI Detective</span>, we work tirelessly to bring <i><b>clarity</b></i> and <i><b>confidence</b></i> to your <b>personal, corporate,</b> and <b>legal concerns.</b> Our investigators operate with <b>complete discretion,</b> ensuring that every detail is uncovered with <b>honesty</b> and <b>precision,</b> and <b>professional integrity</b></p>

                            <p className='m-4'>With <b>years of field expertise</b> and <b>modern investigative tools</b>, we provide <b>dependable insights</b> while maintaining strict privacy, <b>legal compliance,</b> and <b>fairness</b> throughout every case.</p>

                            <p className='m-4'>
                                Our approach is <b>methodical, efficient,</b> and <b>entirely confidential</b> giving you <b>trusted</b> results when you need them most.</p>
                            <div className="container col-sm-12 col-lg-12">
                                <div className="row">
                                    <div className="col-sm-12 p-0 col-lg-6">
                                        <div className="card m-2  text-danger text-center fw-bolder" >
                                            <img className="card-img-top" src='/images/evi.jpg' />
                                            Collect All Evidance
                                        </div></div>
                                    <div className="col-sm-12 p-0 col-lg-6">
                                        <div className="card m-2 text-danger text-center fw-bolder" >
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


                       
                                <div className="col-sm-12 col-lg-3 d-flex text-center justify-content-center p-0 mb-3 fw-bold">
                                    <div className="card crd1" style={{ width: "18rem" }}>
                                        <i className="bi text-center bi-envelope"></i>
                                        <h5 className="card-title mt-4 text-danger">E-Mail</h5>
                                        <div className="card-body p-0">
                                            <p className="crdtxt text-white mt-5">
                                                ibcidetective22@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>

                         



                    </div>
                </div>
            </div>
<div className="container-fluid p-0">
            <TextCar /></div>
            <BgImage />


        </>
    );
};

export default Homepage;