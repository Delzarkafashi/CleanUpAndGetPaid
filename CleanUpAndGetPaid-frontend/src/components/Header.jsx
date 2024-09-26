import React from 'react';
import Navbar from '../components/Navbar';

const Header = () => {
    return (
        <header className="header">
            <div className="input-area">Input Area</div>
            <div className="logo">Logo</div>
            <div className="search-bar">Search Bar</div>
            <div className="login-signin">Login/Signup</div>
            <nav className="navbar"><Navbar /></nav>
        </header>
    );
};

export default Header;
