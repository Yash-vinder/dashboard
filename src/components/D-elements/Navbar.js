
import React from 'react';

import Logo from '../images/Tulsi-Logo.png';
import profilePicture from '../images/icons-bounty.png';
import { NavLink } from 'react-router-dom';
// import { Link, Router } from 'react-router-dom';



export default function Navbar () {
    return (
        <>
        <div className='container'>
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
                                        <NavLink className="nav-link active" aria-current="page" to="/">Dashboard</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/bounties">Bounties</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/submission">Submission</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/approved">Approved</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/bucket">Bucket</NavLink>
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
                </div>
        </>
    );
}