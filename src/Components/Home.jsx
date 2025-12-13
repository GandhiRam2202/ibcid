import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Personal from './Personal';
import Footer from './Footer';
import Corporate from './Corporate';


const Home = () => {
    return (
        <>


            <div>
               
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/Aboutus' element={<Aboutus />} />
                    <Route path='/Contactus' element={<Contactus />} />
                    <Route path='/Personal' element={<Personal />} />
                    <Route path='/Corporate' element={<Corporate />} />
                </Routes>
            </div>
            <Footer/>

        </>
    );
};

export default Home;