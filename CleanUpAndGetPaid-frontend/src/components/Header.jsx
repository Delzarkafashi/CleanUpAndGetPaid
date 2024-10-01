import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';  

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="input-area">Input Area</div>
      <div className="logo" onClick={() => navigate('/')}>Logo</div>

     
      <SearchBar onSearch={onSearch} />

      <div className="login-signin">Login/Signup</div>
      <nav className="navbar">
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
