import React from 'react';
import Home from "./Components/Home"
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';




// import CopyProtection from './CopyProtection';

const App = () => {
  return (
    <>
    <div>
  {/* <CopyProtection/> */}
  <BrowserRouter>
       
      <ScrollToTop />
       <Navbar/>
        <Home/>
        </BrowserRouter>
  
    </div>
    </>
  );
};

export default App;