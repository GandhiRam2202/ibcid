import React from 'react';
import Home from "./Components/Home"
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import CopyProtection from './Components/CopyProtection';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
    <div>
   <CopyProtection/> 
      <ToastContainer position="top-center" theme='dark'/>
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