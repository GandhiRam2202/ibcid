import React from 'react';
import Carsol from './Carsol'
import Carsol1 from './Carsol1'
import '../Components/Homepage.css';


const Homepage = () => {
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

            <div className="container">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12  col-lg-6">
                            <h3>
                                Professional Private Investigation Services
                            </h3>
                            <p>At <span className='text-danger fw-bolder'>IBCI Detective</span>, we work tirelessly to bring clarity and confidence to your personal, corporate, and legal concerns. Our investigators operate with complete discretion, ensuring that every detail is uncovered with honesty and precision.
With years of field expertise and modern investigative tools, we provide dependable insights while maintaining strict privacy, legal compliance, and fairness throughout every case.
</p>
<p>
Our approach is methodical, efficient, and entirely confidential — giving you trusted results when you need them most.</p>
                        </div>
                        <div className="d-none d-lg-block col-lg-6">
                            koks
                        </div>



                    </div>
                </div>
            </div>


        </>
    );
};

export default Homepage;