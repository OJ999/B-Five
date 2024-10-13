import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/img/Logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                >
                    <i className={`fas fa-${isMenuOpen ? "times" : "bars"}`}></i>
                </button>
                <ul className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
                    <li className="navbar-item">
                        <NavLink className="navbar-link" exact to="/" onClick={() => setIsMenuOpen(false)} activeClassName="active">Home</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="navbar-link" to="/What-We-Do" onClick={() => setIsMenuOpen(false)} activeClassName="active">What We Do</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="navbar-link" to="/How-We-Do-It" onClick={() => setIsMenuOpen(false)} activeClassName="active">How We Do It</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="navbar-link" to="/Contact-Us" onClick={() => setIsMenuOpen(false)} activeClassName="active">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
