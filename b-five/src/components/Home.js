import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../assets/css/Home.css";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="content">
                    <h1 className="main-heading">Welcome to B-Five</h1>
                    <h2 className="sub-heading">Consultancy Firm</h2>
                    <hr className="divider" />
                    <p className="description">Providing expert solutions tailored to your needs.</p>
                    <Link to="/contact-us"> {/* Change button to Link */}
                        <button className="moreinfo">
                            <span>More Info</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="section-1">
                <div className="container">
                    <h1>Hello</h1>
                </div>
            </div>
        </>
    );
};

export default Home;
