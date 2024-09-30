import React, { useState } from 'react';
import Navbar from '../components/Navbar';  
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';  

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (onSearch) {
            onSearch(value);  
        }
    };

    return (
        <header className="header" style={styles.header}>
           
            <div className="logo" onClick={() => navigate('/')} style={styles.logo}>
                Logo
            </div>

            
            <div className="search-bar" style={styles.searchBar}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search for items..."
                    style={styles.searchInput}
                />
                <button style={styles.searchButton}>
                    <FaSearch />
                </button>
            </div>

            
            <nav className="navbar" style={styles.navbar}>
                <Navbar />
            </nav>

           
            <div className="login-signin" style={styles.loginSignin}>
                <button style={styles.loginButton}>Login/Signup</button>
            </div>
        </header>
    );
};

// Styles
const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        backgroundColor: '#f8f8f8',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    },
    logo: {
        fontSize: '24px',
        cursor: 'pointer',
        color: '#007bff',
        fontWeight: 'bold',
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 2,
        maxWidth: '500px',
        margin: '0 20px',
        position: 'relative',
    },
    searchInput: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px 0 0 5px',
        border: '1px solid #ccc',
    },
    searchButton: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '0 5px 5px 0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navbar: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
    },
    loginSignin: {
        marginLeft: 'auto',
    },
    loginButton: {
        padding: '10px 20px',
        backgroundColor: '#ff5722',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Header;
