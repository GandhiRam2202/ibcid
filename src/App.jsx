import React from 'react';
import Home from "./Components/Home"
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Aboutus from './Components/Aboutus';




// import CopyProtection from './CopyProtection';

const App = () => {
  return (
    <>
    <div>
  {/* <CopyProtection/> */}
  <BrowserRouter>
       
      
       <Navbar/>
        <Home/>
        </BrowserRouter>
  
    </div>
    </>
  );
};

export default App;