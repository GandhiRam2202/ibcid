import React from 'react';

const Trust = () => {
    return (
        <>
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

export default Trust;