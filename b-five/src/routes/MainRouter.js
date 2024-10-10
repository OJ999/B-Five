import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Industry from '../components/Industry';
import AboutUs from '../components/AboutUs';
import Navbar from '../components/Navbar';

const MainRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/industry" element={<Industry />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </Router>
    );
};

export default MainRouter;