import React from 'react';
import wallpaper from '../assets/img/Wallpaper-Test_page.jpg';

const Home = () => {
    const homeStyle = {
        height: '100vh',
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    };

    return (
        <div style={homeStyle}>
            <h1>Welcome to Home</h1>
        </div>
    );
};

export default Home;