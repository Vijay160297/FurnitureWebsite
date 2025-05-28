// import React from 'react';
import { Link, NavLink,Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaSignInAlt, FaUserPlus, FaEnvelope, FaCartPlus } from 'react-icons/fa'; // Import icons

const Layout = () => {
    return (
        <div>
            {/* Navbar Section */}
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#3887BE' }}> {/* Change color here */}
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">My Website</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" end>
                                    <FaHome /> Home {/* Add home icon */}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    <FaSignInAlt /> Login {/* Add login icon */}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    <FaEnvelope /> Contact {/* Add contact icon */}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">
                                    <FaUserPlus /> Register {/* Add register icon */}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/productpage">
                                    <FaCartPlus /> Product Page {/* Add product page icon */}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Content Section */}
            <div className="container mt-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
