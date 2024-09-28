import React, { useState } from 'react';
import Header from '../components/Header';

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newItem = {
            name: itemName,
            description: itemDescription,
        };
    
        // Skicka POST-förfrågan till backend API
        fetch('http://localhost:5162/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setMessage(`Item added successfully: ${data.name}`);
            setItemName('');
            setItemDescription('');
        })
        .catch(error => {
            console.error('Error adding item:', error);
            setMessage('Failed to add item.');
        });
    };
    

    return (
        <div className="add-item">
            <Header /> {/* Use Header component here */}
            <div style={styles.container}>
                <h2 style={styles.title}>Add New Item</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Item Name:</label>
                        <input
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Item Description:</label>
                        <textarea
                            value={itemDescription}
                            onChange={(e) => setItemDescription(e.target.value)}
                            required
                            style={styles.textarea}
                        />
                    </div>
                    <button type="submit" style={styles.button}>Add Item</button>
                </form>
                {message && <p>{message}</p>}
            </div>
            <footer className="footer">Footer</footer>
        </div>
    );
};

// CSS-stilar
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        minHeight: '100vh',
    },
    title: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        maxWidth: '500px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        padding: '20px',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
    },
    textarea: {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        minHeight: '100px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
};

// Lägg till hover-effekt för knappen
styles.button[':hover'] = {
    backgroundColor: '#45a049',
};

export default AddItem;
