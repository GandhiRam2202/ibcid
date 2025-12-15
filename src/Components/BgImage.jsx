import React from 'react';
import { handleOpenMap, handleCall, handleMail, handleWap } from './Contact';

const BgImage = () => {
    return (
        <>
            <div
                className="container-fluid p-0"
                style={{
                    backgroundImage: "url('/images/abbsw.jpeg')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "300px",
                }}
            >
                <div
                    className="container-fluid p-0 h-100 d-flex justify-content-center align-items-center"
                    style={{
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div className="text-center">
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "3rem",
                                color: "white",
                            }}
                        >
                            Welcome to IBCID-Detective
                        </div>

                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                color: "white",
                            }}
                        >
                            Need Assistance?
                        </div>
                        <div className="d-flex justify-content-center text-center text-white mt-4 p-0" onClick={handleCall}>
                            <div className="col-6 bg rounded-pill">
                                <i className="p-0 bi bi-telephone-fill">
                                    (+91)9043396037
                                </i>
                            </div>
                        </div>


                        <div className="container mt-3 text-white">
                            <div className="col-sm-12">
                                <div className="row text-center">
                                    <div className="col-3 p-0" onClick={handleOpenMap}><i className="bi bi-geo-alt-fill"></i></div>
                                    <div className="col-3 p-0" onClick={handleCall}><i className="bi bi-telephone-fill"></i></div>
                                    <div className="col-3 p-0" onClick={handleMail}><i className="bi bi-envelope-fill"></i></div>
                                    <div className="col-3 p-0" onClick={handleWap}><i className="bi bi-whatsapp"></i></div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div >
        </>
    );
};

export default BgImage;