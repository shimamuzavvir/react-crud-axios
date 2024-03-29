import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to="/userDetails" className="nav-link" aria-current="page">User Details</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
