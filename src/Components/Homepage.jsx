import React from 'react';
import Carsol from './Carsol'
import Carsol1 from './Carsol1'
import '../Components/Homepage.css';
import img1 from '/images/con.png'



const Homepage = () => {
    const image = img1;
    return (
        <>

            <div className="d-none mt-2 d-lg-block">
                <Carsol />
            </div>
            <div className=" mt-2 d-lg-none d-sm-block">
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
                                                <img className="card-img-top" src='/images/evi.jpg'  />
                                                Collect All Evidance
                                            </div></div>
                                        <div className="col-sm-12 p-0 col-lg-6">
                                            <div className="card m-2 text-danger text-center fw-bolder" >
                                                <img className="card-img-top" src='/images/inv.jpeg'  />
                                                Strong Investigation Team
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 p-0 col-lg-6">
                                
                               
      <div className="frame-outline">
        <div className="frame-bg d-flex justify-content-center align-items-center">
          <img
            src="/images/det.png"
            alt=""
            className="frame-img" style={{height:'550px'}}
          />
        </div>
      </div>
    </div>



                            </div>
                        </div>



                    </div>
               
            


        </>
    );
};

export default Homepage;