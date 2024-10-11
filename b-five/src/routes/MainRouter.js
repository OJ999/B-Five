import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import WhatWeDo from '../components/WhatWeDo';
import HowWeDoIt from '../components/HowWeDoIt';
import ContactUs from '../components/ContactUs';
import Navbar from '../components/Navbar';

const MainRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/What-We-Do" element={<WhatWeDo />} />
                <Route path="/How-We-Do-It" element={<HowWeDoIt />} />
                <Route path="/Contact-Us" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default MainRouter;