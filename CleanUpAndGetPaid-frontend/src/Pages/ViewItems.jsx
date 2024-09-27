import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const ViewItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch items from backend API
        fetch('http://localhost:5162/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    return (
        <div className="view-items">
            <Header /> 
            <div className="items-list">
                <h2 style={styles.title}>Here are the available items for sale:</h2>
                <ul style={styles.itemList}>
                    {items.map((item) => (
                        <li key={item.id} style={styles.listItem}>
                            {item.name}: {item.description}
                        </li>
                    ))}
                </ul>
            </div>
            <footer className="footer">Footer</footer>
        </div>
    );
};

// CSS-stilar
const styles = {
    title: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '20px',
        textAlign: 'center', // Centrerar rubriken
    },
    itemList: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
        width: '80%',
        maxWidth: '600px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        margin: '0 auto', // Centrerar listan
    },
    listItem: {
        padding: '10px',
        borderBottom: '1px solid #eee',
        transition: 'background 0.3s',
        cursor: 'pointer', // Ändrar muspekaren för att indikera att listan är klickbar
        ':hover': { // Lägg till en hover-effekt
            backgroundColor: '#f0f0f0',
        },
    },
    listItemLast: {
        padding: '10px',
        borderBottom: 'none',
        transition: 'background 0.3s',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#f0f0f0',
        },
    },
};

export default ViewItems;
