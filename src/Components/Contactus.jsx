import React from 'react';
import BgImage from './BgImage';
import Bgimg from './Bgimg'
import { handleCall, handleOpenMap, handleWap, handleMail } from './Contact';

const Contactus = () => {
  return (
    <>
      <Bgimg />
      <div className="text-center">
        <h4 className='font fw-bold'>Contact Us</h4>
        <h1 className='font1 fw-bold'>Get In Touch</h1>
      </div>


      <div className="container">
        <div className="row justify-content-center">

          <div className="col-sm-12 col-lg-3 d-flex text-center justify-content-center mb-3 fw-bold">
            <div className="card crd" style={{ width: "18rem" }}>
              <i className="bi bi-map text-center fw-bold" onClick={handleOpenMap}></i>
              <h5 className="card-title mt-4 text-danger">Our Office</h5>
              <div className="card-body p-0">

                <p className="crdtxt p-0 m-0" >SRI BALAVINAYAGA APARTMENT</p>
                <p className="crdtxt p-0 m-0">No. 77, B/S1, Second Floor,</p>
                <p className="crdtxt p-0 m-0">5th Main Road,</p>
                <p className="crdtxt p-0 m-0">Purushothaman Nagar,</p>
                <p className="crdtxt p-0 m-0">Chromepet, Chennai</p>
                <p className="crdtxt p-0 m-0">600 044.</p>

              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-3 d-flex text-center justify-content-center mb-3 fw-bold">
            <div className="card crd" style={{ width: "18rem" }}>
              <i className="bi text-center bi-envelope" onClick={handleMail}></i>
              <h5 className="card-title mt-4 text-danger">E-Mail</h5>
              <div className="card-body p-0">
                <p className="crdtxt mt-5">
                  ibcidetective22@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-3 d-flex text-center justify-content-center mb-3 fw-bold">
            <div className="card crd" style={{ width: "18rem" }}>
              <i className="bi bi-telephone" onClick={handleCall}></i>
              <h5 className="card-title mt-4 text-danger">Phone</h5>
              <div className="card-body p-0">
                <p className="crdtxt mt-5">
                  (+91)8667403826
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-3 d-flex text-center justify-content-center mb-3 fw-bold">
            <div className="card crd" style={{ width: "18rem" }}>
             <i className="bi bi-whatsapp whatsapp" onClick={handleWap}></i>
              <h5 className="card-title mt-4 text-danger">Whatsapp</h5>
              <div className="card-body p-0">
                <p className="crdtxt mt-5">
                  (+91)8667403826
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>




      <div className="container">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12 col-lg-6">Parthi</div>
            <div className="col-sm-12 col-lg-6">Parthi</div>
          </div>
        </div>
      </div>
      <BgImage />
    </>
  );
};

export default Contactus;