import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const ViewItems = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null); 
    const [updatedName, setUpdatedName] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedPrice, setUpdatedPrice] = useState(''); 
    const [selectedCategory, setSelectedCategory] = useState(''); // Added category state

    const categories = [
        'Fordon', 'Elektronik', 'Möbler', 'Kök', 'Sport', 'Böcker', 'Kläder',
        'Smycken', 'Leksaker', 'Hemelektronik', 'Skor', 'Väskor', 'Trädgård',
        'Verktyg', 'Musikinstrument'
    ];

    // Fetch items from backend
    useEffect(() => {
        fetch('http://localhost:5162/items')
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setFilteredItems(data);  
            })
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    // Handle search functionality
    const handleSearch = (searchTerm) => {
        const filtered = items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    // Handle delete item
    const handleDelete = (id) => {
        fetch(`http://localhost:5162/items/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to delete item: ${response.statusText}`);
                }
                setItems(items.filter(item => item.id !== id));
                setFilteredItems(filteredItems.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error deleting item:', error.message);
            });
    };

    // Handle update item
    const handleUpdate = (id) => {
        const updatedItem = { 
            name: updatedName, 
            description: updatedDescription,
            price: parseFloat(updatedPrice), 
            category: selectedCategory // Include category update
        };

        fetch(`http://localhost:5162/items/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to update item: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const updatedList = items.map(item =>
                item.id === id ? { ...item, name: data.name, description: data.description, price: data.price, category: data.category } : item
            );
            setItems(updatedList);
            setFilteredItems(updatedList);
            setEditingItem(null); // Stop editing
        })
        .catch(error => {
            console.error('Error updating item:', error.message);
        });
    };

    return (
        <div className="view-items-page" style={styles.container}>
            <Header onSearch={handleSearch} /> 
            
            <div style={styles.container}>
                <h1 style={styles.title}>Available Items</h1>
                <div style={styles.itemsGrid}>
                    {filteredItems.map((item) => (
                        <div key={item.id} style={styles.itemCard}>
                            {editingItem === item.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={updatedName}
                                        onChange={(e) => setUpdatedName(e.target.value)}
                                        placeholder="Update Name"
                                        style={styles.input}
                                    />
                                    <textarea
                                        value={updatedDescription}
                                        onChange={(e) => setUpdatedDescription(e.target.value)}
                                        placeholder="Update Description"
                                        style={styles.textarea}
                                    />
                                    <input
                                        type="number"
                                        value={updatedPrice}
                                        onChange={(e) => setUpdatedPrice(e.target.value)}
                                        placeholder="Update Price"
                                        style={styles.input}
                                    />
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        style={styles.input}
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                    <div style={styles.editButtonContainer}>
                                        <button style={styles.editButton} onClick={() => handleUpdate(item.id)}>Save</button>
                                        <button style={styles.cancelButton} onClick={() => setEditingItem(null)}>Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h2 style={styles.itemTitle}>{item.name}</h2>
                                    <p style={styles.itemDescription}>{item.description}</p>
                                    <p style={styles.itemPrice}>Price: ${item.price}</p> 
                                    <p style={styles.itemCategory}>Category: {item.category}</p> {/* Display category */}
                                    <div style={styles.buttonContainer}>
                                        <button style={styles.editButton} onClick={() => {
                                            setEditingItem(item.id);
                                            setUpdatedName(item.name);
                                            setUpdatedDescription(item.description);
                                            setUpdatedPrice(item.price);
                                            setSelectedCategory(item.category); // Set current category for editing
                                        }}>
                                            Edit
                                        </button>
                                        <button style={styles.deleteButton} onClick={() => handleDelete(item.id)}>Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <footer className="footer">Footer</footer>
        </div>
    );
};

// Styles CSS
const styles = {
    container: {
        padding: '20px',
    },
    title: {
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '30px',
        marginTop: '60px',
    },
    itemsGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
    },
    itemCard: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        width: '300px',
        minHeight: '300px', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        wordWrap: 'break-word',
        position: 'relative',
    },
    itemContent: {
        flexGrow: 1, 
    },
    itemTitle: {
        fontSize: '18px',
        marginBottom: '10px',
        fontWeight: 'bold',
        wordWrap: 'break-word',
    },
    itemDescription: {
        fontSize: '14px',
        color: '#555',
        marginBottom: '15px',
        wordWrap: 'break-word',
    },
    itemPrice: {  // Added this style for the price
        fontSize: '16px',
        color: '#333',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        position: 'absolute',
        bottom: '10px',  
        width: '90%',  
        left: '50%',
        transform: 'translateX(-50%)',
    },
    editButtonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
    },
    editButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        flex: '1',
        marginRight: '10px',
        fontSize: '14px',
        transition: 'background-color 0.3s ease',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        flex: '1',
        fontSize: '14px',
        transition: 'background-color 0.3s ease',
    },
    cancelButton: {
        backgroundColor: '#ccc',
        color: 'black',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        flex: '1',
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    textarea: {
        padding: '10px',
        marginBottom: '10px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minHeight: '100px',
    },
};

export default ViewItems;
