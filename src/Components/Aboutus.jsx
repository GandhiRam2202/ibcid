import React from 'react';

const Aboutus = () => {
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

            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">



                        <div className="d-flex justify-content-center ">

                            <img
                                src="/images/abbs1.png"
                                alt=""
                                style={{ height: '500px' }}
                            />
                        </div>












                    </div>
                    <div className="col-sm-12 text-center col-lg-6">
                        parthi
                    </div>
                </div>
            </div>

        </>
    );
};

export default Aboutus;