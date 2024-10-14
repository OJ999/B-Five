import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../assets/css/Home.css";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="content">
                    <h1 className="main-heading">Welcome to B.Five</h1>
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

            <div className="container">
                <h1 style={{ float: 'left', display: 'inline-block' }}>What We Do?</h1>
                <div className="gallery-wrap">
                    {[1].map(item => (
                        <div key={item} className={`item item-${item}`}>
                            <div className="caption">
                                <h1>Title 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    ))}
                    {[2].map(item => (
                        <div key={item} className={`item item-${item}`}>
                            <div className="caption">
                                <h1>Title 2</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    ))}
                    {[3].map(item => (
                        <div key={item} className={`item item-${item}`}>
                            <div className="caption">
                                <h1>Title 3</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    ))}
                    {[4].map(item => (
                        <div key={item} className={`item item-${item}`}>
                            <div className="caption">
                                <h1>Title 4</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    ))}
                    {[5].map(item => (
                        <div key={item} className={`item item-${item}`}>
                            <div className="caption">
                                <h1>Title 5</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
