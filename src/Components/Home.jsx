import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Aboutus from './Aboutus';
import Contactus from './Contactus';

const Home = () => {
    return (
        <>


            <div>
               
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/Aboutus' element={<Aboutus />} />
                    <Route path='/Contactus' element={<Contactus />} />
                </Routes>
            </div>

        </>
    );
};

export default Home;