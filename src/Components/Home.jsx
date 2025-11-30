import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Carsol1 from './Carsol1'

const Home = () => {
    return (
        <>


            <div>
               
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/Carsol' element={<Carsol1 />} />
                </Routes>
            </div>

        </>
    );
};

export default Home;