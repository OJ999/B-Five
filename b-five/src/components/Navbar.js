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
                    {["Home", "About", "Services", "Contact"].map((item) => (
                        <li className="navbar-item" key={item}>
                            <Link className="navbar-link" to={`/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
