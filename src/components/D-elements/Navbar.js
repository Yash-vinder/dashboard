
import React from 'react';

import Logo from '../images/Tulsi-Logo.png';
import profilePicture from '../images/icons-bounty.png';
// import { Link, Router } from 'react-router-dom';



export default function Navbar () {
    return (
        <>
            <div className='row dashboard-nav'>
                    <div className="col-md-2 nav-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="col-md-6">
                        <nav className="navbar navbar-expand-lg  ">
                            <div className="container-fluid">
                                
                                
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav nav-ul me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to="#">Bounties</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to="#">Submission</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to="#">Approved</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to="#">Bucket</a>
                                    </li>
                                    
                                    </ul>
                                    
                                </div>
                            </div>
                        </nav>

                    </div>
                        <div className="col-md-4 creat-bounty-btn">
                            <button>Create Bounties +</button>
                            <img src={profilePicture} alt="" />
                        </div>
                </div>
        </>
    );
}