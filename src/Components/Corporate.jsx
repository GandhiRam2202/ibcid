import React from 'react';
import Bgimg from './Bgimg';
import Trust from './Trust';
import ContactForm from './ContactForm';
import { handleCall, handleOpenMap, handleWap, handleMail } from './Contact';

const Corporate = () => {
    return (
        <>
          <Bgimg/>

           <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-12 text-center d-none d-lg-block p-0 col-lg-6">
                        <div className="frame-outline">
                            <div className="frame-bg1 d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/corp.png"
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
                                    src="/images/corp.png"
                                    alt=""
                                    className="frame-img" style={{ height: '500px' }}
                                />
                            </div>
                        </div>


                    </div>

                    <div className="col-sm-12 text-warp col-lg-6 d-flex-column mt-2 justify-content-center align-items-center">
                        <h1 className='text-danger'>Corporate Services</h1>

                        <p className='mt-2 fw-bold'>🔍 Our Corporate Services Include:</p>

                       
                       
                        <li className="d-flex fw-bold align-items-center">
                            ✔ Employee Background Verification</li>
                            <p className='mb-2'>Verify identity, employment history, education, criminal records, and integrity before hiring.</p>
                        <li className="d-flex fw-bold align-items-center">
                            ✔ Employee Surveillance</li>
                            <p className='mb-2'>Monitor suspicious activities, misconduct, moonlighting, or policy violations discreetly.</p>
                        <li className="d-flex fw-bold align-items-center">
                            ✔ Corporate Fraud Investigation</li>
                            <p className='mb-2'>Detect internal fraud, financial irregularities, data theft, and misuse of company resources.</p>
                        <li className="d-flex fw-bold align-items-center">
                            ✔ Due Diligence Investigation</li>
                            <p className='mb-2'>Verify business partners, vendors, distributors, and investors before entering agreements.</p>
                        <li className="d-flex fw-bold align-items-center">
                            ✔ Insurance Claim Investigation</li>
                            <p className='mb-2'>Identify fake or exaggerated insurance claims to reduce financial loss.</p>
                        <li className="d-flex fw-bold align-items-center">
                            ✔ Intellectual Property Theft</li>
                            <p className='mb-2'>Investigate data leaks, trade secret theft, and employee betrayal cases.</p>
                        <li className="d-flex fw-bold align-items-center">
                            ✔ Absconding Employee Tracking</li>
                            <p className='mb-2'>Locate employees who have disappeared after handling sensitive data or funds.</p>
                        <li className="d-flex fw-bold align-items-center">
                            ✔ Corporate Espionage Detection</li>
                            <p className='mb-2'>Uncover spying, competitor sabotage, and confidential information leakage.</p>

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
                          (+91)8667403826
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

          <Trust/>
        </>
    );
};

export default Corporate;