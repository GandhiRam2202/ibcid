import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Aboutus from './Aboutus';

const Home = () => {
    return (
        <>


            <div>
               
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/Aboutus' element={<Aboutus />} />
                </Routes>
            </div>

        </>
    );
};

export default Home;