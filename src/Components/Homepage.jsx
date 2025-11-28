import React from 'react';
import Carsol from './Carsol'
import Carsol1 from './Carsol1'

const Homepage = () => {
    return (
        <>
        
    <div className="d-none mt-2 d-lg-block">
        <Carsol/>
    </div>
    <div className=" mt-2 d-lg-none d-sm-block">
        <Carsol1/>
    </div>

       
        <div className='mt-4 container'>
            <h1 className='text-danger text-center'>About IBCID</h1>
        </div>
        </>
    );
};

export default Homepage;