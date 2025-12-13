import React from 'react';
import BgImage from './BgImage';
import { Link } from 'react-router-dom';
import { handleOpenMap, handleCall, handleMail, handleWap } from './Contact';
import TextCar from './TextCar';
import Trust from './Trust';


const Personal = () => {
    return (
        <>
            <BgImage />
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-12 text-center d-none d-lg-block p-0 col-lg-6">
                        <div className="frame-outline">
                            <div className="frame-bg1 d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/track.png"
                                    alt=""
                                    className="frame-img" style={{ height: '600px' }}
                                />
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-12 text-center d-block d-lg-none p-0 col-lg-6">
                        <div className="frame-outline">
                            <div className="frame-bg1 d-flex  justify-content-center align-items-center">
                                <img
                                    src="/images/track.png"
                                    alt=""
                                    className="frame-img" style={{ height: '500px' }}
                                />
                            </div>
                        </div>


                    </div>

                    <div className="col-sm-12 text-warp col-lg-6 d-flex-column mt-2 justify-content-center align-items-center">
                        <h1 className='text-danger'>Personal Services</h1>



                        <div className="row">
                            <div className="col-lg-6 fw-bolder">
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Tracking People
                                    </li>

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Divorce
                                    </li>

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Matrimonial Investigation
                                    </li>





                                </ul>

                            </div>
                            <div className="col-lg-6 fw-bolder">
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Post-Matrimonial Services
                                    </li>

                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Pre-Matrimonial Services
                                    </li>



                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check text-danger me-2"></i>
                                        Personal Detective Services
                                    </li>



                                </ul>
                            </div>

                        </div>

                        <p className='mt-4 fw-bold'>⭐ Tracking People – Find Anyone, Anytime With 100% Confidentiality</p>

                        <p> At <span className='text-danger fw-bold'>IBCI Detective</span>, we specialize in locating and tracking individuals
                            with absolute privacy and accuracy. Whether someone has gone missing, avoiding
                            repayment, hiding the truth, or simply cannot be reached, our expert investigators
                            use advanced surveillance methods to trace their movements and provide you with reliable,
                            real-time information.</p>

                        <p className='fw-bold'> 🔍 When Do You Need Our Tracking People Service? </p>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Missing or runaway individuals</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ People involved in money cheating or fraud</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Spouse or partner with suspicious behaviour</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Employees or business associates avoiding communication</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Individuals who owe money or disappeared suddenly</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Locating old friends, relatives, or contacts</li>

                    </div>

                </div>

            </div>
            <TextCar />

            <div className=" mt-2 container">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12 text-wrap p-2 col-lg-6 text-warp">
                            <h1 className='text-danger'>
                                Divorce
                            </h1>
                            <p className='fw-bold'>🔥 Divorce Investigation – Get the Truth You Deserve Before Making Life Decisions</p>


                            <p>Divorce is one of the most emotionally stressful phases in life. When doubts,
                                lies, or hidden activities start affecting your peace, <span className='fw-bold text-danger'>IBCI Detective </span>provides clear,
                                reliable, and confidential evidence to help you make the right decision with confidence.</p>

                            <p> Our Divorce Investigation Service is designed to uncover the truth discreetly, legally,
                                and professionally — ensuring you have the facts you need for your personal clarity or legal proceedings.</p>

                            <p className='fw-bold mt-2 mb-1'> 🔍 Why Do Clients Need Divorce Investigation Services? </p>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Suspected extra-marital affairs / cheating</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Sudden change in partner’s behaviour or routine</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Unexplained expenses or secret financial activities</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Lack of transparency, frequent lies, or late-night outings</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Doubts during child custody or maintenance cases</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Safety concerns or emotional harassment</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Suspicion of hidden assets or property</li>


                        </div>
                        <div className="col-sm-12 p-0 col-lg-6 d-none d-lg-block">


                            <div className="frame-outline">
                                <div className="frame-bg d-flex justify-content-center align-items-center">
                                    <img
                                        src="/images/divo.png"
                                        alt=""
                                        className="frame-img" style={{ height: '550px' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 p-0 col-lg-6 d-block d-lg-none">


                            <div className="frame-outline">
                                <div className="frame-bg d-flex justify-content-center align-items-center">
                                    <img
                                        src="/images/divo.png"
                                        alt=""
                                        className="frame-img" style={{ height: '500px' }}
                                    />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


            </div>

            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-12 text-center d-none d-lg-block p-0 col-lg-6">
                        <div className="frame-outline">
                            <div className="frame-bg1 d-flex justify-content-center align-items-center">
                                <img
                                    src="/images/mat1.png"
                                    alt=""
                                    className="frame-img" style={{ height: '600px' }}
                                />
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-12 text-center d-block d-lg-none p-0 col-lg-6">
                        <div className="frame-outline">
                            <div className="frame-bg1 d-flex  justify-content-center align-items-center">
                                <img
                                    src="/images/mat1.png"
                                    alt=""
                                    className="frame-img" style={{ height: '500px' }}
                                />
                            </div>
                        </div>


                    </div>

                    <div className="col-sm-12 text-warp col-lg-6 d-flex-column mt-2 justify-content-center align-items-center">
                        <h1 className='text-danger'>Matrimonial Investigation</h1>

                        <p className='fw-bold'>Pre-Matrimonial Investigation</p>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Real background & lifestyle</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Job, income & employment status</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Family background & behaviour</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Habits: smoking, drinking, gambling</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Past relationships or affairs</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Criminal record & legal issues</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Personal character verification</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Social media & digital footprint</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Financial stability</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Hidden debts or loans</li>



                        <p className='fw-bold mt-3'>Post-Matrimonial Investigation</p>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Extra-marital affair verification</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Behaviour & movement tracking</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Late-night activities monitoring</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Communication & social circle analysis</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Suspicious behaviour documentation</li>
                        <li className="d-flex align-items-center mb-2">
                            ✔ Evidence for legal support</li>

                    </div>

                </div>
                <p className='fw-bold text-center mt-2'>💍 Matrimonial Investigation – Ensure Trust Before & After Marriage</p>

                <p className='text-center'>Marriage is a lifelong commitment — but today, trust can’t be built on assumptions.</p>
                <p className='text-center'>Our <b>Matrimonial Investigation Services</b> help you verify the truth, uncover hidden details,
                    and protect your future from risks and surprises.</p>
                <p className='text-center m-0'>Whether it’s Pre-Matrimonial Verification or Post-Matrimonial Investigation, we provide accurate,
                    confidential, and court-usable evidence.</p>


            </div>
            <TextCar />

             <div className="mt-2 container">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12 p-2 col-lg-6 text-warp">
                            <h1 className='text-danger'>
                                Personal Detective Services
                            </h1>
                            <p className='fw-bold'>🕵️ Personal Detective Services – Get the Truth You Need with Complete Confidentiality</p>


                            <p>When doubts, risks, or unexpected problems arise in your personal life, you deserve clear 
                                answers — not stress or confusion.</p>

                            <p>Our <b>Personal Detective Services</b> are designed to uncover facts, gather solid evidence, 
                                and protect your safety and peace of mind.</p>

                            <p>We handle every case discreetly, professionally, and legally, ensuring you receive reliable
                                 information without anyone knowing an investigation took place.</p>


                            <p className='fw-bold mt-2 mb-1'> 🎯 When Do You Need a Personal Detective ?</p>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Suspicious behaviour from a partner or friend</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Unknown threats or harassment</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ A person who suddenly disappears</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Trust issues in relationships</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Cheating or financial disputes</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Personal safety concerns</li>
                            <li className="d-flex align-items-center mb-2">
                                ✔ Someone hiding their real identity</li>


                        </div>
                        <div className="col-sm-12 p-0 col-lg-6 d-none d-lg-block">


                            <div className="frame-outline">
                                <div className="frame-bg d-flex justify-content-center align-items-center">
                                    <img
                                        src="/images/abbs2.png"
                                        alt=""
                                        className="frame-img" style={{ height: '550px' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 p-0 col-lg-6 d-block d-lg-none">


                            <div className="frame-outline">
                                <div className="frame-bg d-flex justify-content-center align-items-center">
                                    <img
                                        src="/images/abbs2.png"
                                        alt=""
                                        className="frame-img" style={{ height: '500px' }}
                                    />
                                </div>
                           


                    <div className=" mt-2 container">
                        <div className="col-sm-12">
                            <p className='text-center fw-bold'>🔍 Our Personal Investigation Services Include:</p>

                            <p className='text-center mt-2 mb-0 fw-bold'>
                                ✔ Tracking People</p>
                            <p className='text-center'>Locate missing individuals, runaway family members, or people avoiding communication.</p>
                            <p className='text-center mt-2 mb-0 fw-bold'>
                                ✔ Background Verification</p>
                            <p className='text-center'>Know the real truth about someone’s past before trusting them.</p>
                            <p className='text-center mt-2 mb-0 fw-bold'>
                                ✔ Extra-Marital / Relationship Issues</p>

                            <p className='text-center'>Identify cheating partners, suspicious behavior, and hidden activities.</p>
                            <p className='text-center mt-2 mb-0 fw-bold'>
                                ✔ Surveillance & Activity Monitoring</p>

                            <p className='text-center'>Real-time monitoring of movements, meetings, and daily routines.</p>
                            <p className='text-center mt-2 mb-0 fw-bold'>
                                ✔ Money Fraud & Cheating Cases</p>

                            <p className='text-center'>Investigate financial scams, cheating in partnerships, and personal monetary disputes.</p>
                            <p className='text-center mt-2 mb-0 fw-bold'>
                                ✔ Missing Person Investigation</p>

                            <p className='text-center'>Find individuals who have suddenly disappeared or lost contact.</p>
                            <p className='text-center mt-2 mb-0 fw-bold'>
                                ✔ Cyber & Social Media Investigation</p>

                            <p className='text-center'>Detect fake accounts, online harassment, threats, and digital fraud.</p>
                        </div>
                    </div>
                </div>
            </div>

                    </div>
                </div>


            </div>


            <Trust/>




        </>
    );
};

export default Personal;