import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/img/Logo.jpg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </Link>
                {/* Trigger Button for Mobile View */}
                <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
                    <i className={`fas fa-${isMenuOpen ? "times" : "bars"}`}></i>
                </button>
                <ul className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/What-We-Do">What We Do</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/How-We-Do-It">How We Do It</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/Contact-Us">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
