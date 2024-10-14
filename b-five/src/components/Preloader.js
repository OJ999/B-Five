import React, { useEffect, useState } from 'react';
import "../assets/css/Preloader.css";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="loader">
            <div className={`logo ${!loading ? 'fly-out' : ''}`}>
                <div className="spinner">
                    <span></span>
                </div>
                <div className="name">
                    <div className="compName bg">
                        <span>B</span>
                        <span>.</span>
                        <span>F</span>
                        <span>I</span>
                        <span>V</span>
                        <span>E</span>
                    </div>
                    <div className="compName rt">
                        <span>B</span>
                        <span>.</span>
                        <span>F</span>
                        <span>I</span>
                        <span>V</span>
                        <span>E</span>
                    </div>
                </div>
                <div className="loading">
                    <span>LOADING</span>
                </div>
            </div>
            <div className="strips">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Preloader;
