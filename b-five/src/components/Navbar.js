import React, { useEffect, useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/img/Logo.jpg";

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const location = useLocation();
    const [activePage, setActivePage] = useState(location.pathname);

    const handleSelector = () => {
        const activeItem = document.querySelector(".nav-item.active");
        const horiSelector = document.querySelector(".hori-selector");

        if (activeItem && horiSelector) {
            const itemHeight = activeItem.offsetHeight;
            const itemWidth = activeItem.offsetWidth;
            const itemPosTop = activeItem.offsetTop;
            const itemPosLeft = activeItem.offsetLeft;

            horiSelector.style.top = `${itemPosTop}px`;
            horiSelector.style.left = `${itemPosLeft}px`;
            horiSelector.style.height = `${itemHeight}px`;
            horiSelector.style.width = `${itemWidth}px`;
        }
    };

    useLayoutEffect(() => {
        handleSelector(); // Position the selector on mount

        const handleResize = () => {
            handleSelector(); // Reposition on resize
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [activePage]);

    useEffect(() => {
        const navbarItems = document.querySelectorAll(".nav-item");
        navbarItems.forEach((item) => {
            item.classList.remove("active");
            if (item.querySelector("a").getAttribute("href") === activePage) {
                item.classList.add("active");
            }
        });
        handleSelector(); // Update selector position when active page changes
    }, [activePage, location.pathname]);

    const toggleNavbar = () => {
        setIsCollapsed((prevState) => {
            const newState = !prevState;
            // Call handleSelector after state update
            if (!newState) handleSelector(); // Only call if expanding the navbar
            return newState;
        });
    };

    const handlePageChange = (path) => {
        setActivePage(path);
        toggleNavbar(); // Collapse the navbar on item click
    };

    const handleLogoClick = () => {
        const homePath = "/";
        setActivePage(homePath);
        toggleNavbar(); // Collapse the navbar
    };

    return (
        <nav className="navbar navbar-expand-custom navbar-mainbg">
            <Link className="navbar-brand navbar-logo" to="/" onClick={handleLogoClick}>
                <img src={logo} alt="Logo" className="navbar-logo-img" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                aria-controls="navbarSupportedContent"
                aria-expanded={!isCollapsed}
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                    <li className={`nav-item ${activePage === "/" ? "active" : ""}`}>
                        <Link className="nav-link" to="/" onClick={() => handlePageChange("/")}>
                            <i className="far fa-address-book"></i>Home
                        </Link>
                    </li>
                    <li className={`nav-item ${activePage === "/industry" ? "active" : ""}`}>
                        <Link className="nav-link" to="/industry" onClick={() => handlePageChange("/industry")}>
                            <i className="far fa-clone"></i>Industries
                        </Link>
                    </li>
                    <li className={`nav-item ${activePage === "/about-us" ? "active" : ""}`}>
                        <Link className="nav-link" to="/about-us" onClick={() => handlePageChange("/about-us")}>
                            <i className="far fa-calendar-alt"></i>About Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
