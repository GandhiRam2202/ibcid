import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';

const Home = () => {
    return (
        <>


            <div>
               
                <Routes>
                    <Route path='/' element={<Homepage />} />
                </Routes>
            </div>

        </>
    );
};

export default Home;