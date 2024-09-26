import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.ul}>
                <li style={styles.li}><Link to="/" style={styles.link}>Home</Link></li>
                <li style={styles.li}><Link to="/view-items" style={styles.link}>View Items</Link></li>
                <li style={styles.li}><Link to="/add-item" style={styles.link}>Add Item</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#9c27b0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    li: {
        margin: '0 15px',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
    },
};

export default Navbar;
