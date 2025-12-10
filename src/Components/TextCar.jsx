import React from 'react';
import TextCar1 from './TextCar1';


const TextCar = () => {






    return (
        <>
          <div id="autoText" className="carousel slide d-block d-lg-none" data-bs-ride="carousel" data-bs-touch="true" data-bs-interval="2000" data-bs-swipe="true" data-bs-pause="false">
                <div className="txtcra carousel-inner text-white text-center p-3">
                    <TextCar1/>
                </div>
            </div>



            <div id="autoText"
                className="carousel mt-2 slide d-none d-lg-block"
                data-bs-ride="carousel"
                data-bs-interval="2000">

                <div className ="txtcra carousel-inner text-white text-center p-4">

                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-4 fs-4 mt-3">Your Peace, Our Mission</div>
                            <div className="col-4 fs-4 mt-3">Justice Begins With Facts</div>
                            <div className="col-4 fs-4 mt-3">We See What Others Miss</div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-6 fs-4 mt-3">Truth Delivered With Discretion</div>
                            <div className="col-6 fs-4 mt-3">Clarity Behind Every Case</div>
                        </div>
                    </div>


                    {/* Slide 3 */}
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-4 fs-4 mt-3">Truth leaves footprints</div>
                            <div className="col-4 fs-4 mt-3">Your truth. Our mission</div>
                            <div className="col-4 fs-4 mt-3">Evidence never lies</div>
                        </div>
                    </div>


                    {/* Slide 4 */}
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-6 fs-4 mt-3">Tracking Truth Relentlessly</div>
                            <div className="col-6 fs-4 mt-3">Investigating Beyond Limits</div>
                        </div>
                    </div>



                </div>
            </div>
            
        </>
    );
};

export default TextCar;