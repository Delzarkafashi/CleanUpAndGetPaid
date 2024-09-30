import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const Home = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);  
    const [updatedName, setUpdatedName] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [visibleStartIndex, setVisibleStartIndex] = useState(0);

    const keywordsPerPage = 10;

    // Fetch items from backend
    useEffect(() => {
        fetch('http://localhost:5162/items')
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setFilteredItems(data);
                const uniqueKeywords = [...new Set(data.map(item => item.name))];
                setKeywords(uniqueKeywords);
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
        const updatedItem = { name: updatedName, description: updatedDescription };

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
                item.id === id ? { ...item, name: data.name, description: data.description } : item
            );
            setItems(updatedList);
            setFilteredItems(updatedList);
            setEditingItem(null); 
        })
        .catch(error => {
            console.error('Error updating item:', error.message);
        });
    };

   
    const handleKeywordClick = (keyword) => {
        const filtered = items.filter(item => item.name.toLowerCase() === keyword.toLowerCase());
        setFilteredItems(filtered);
    };

   
    const scrollRight = () => {
        const container = document.querySelector('.scrollFilter');
        container.scrollLeft += 200; 
    };

    const scrollLeft = () => {
        const container = document.querySelector('.scrollFilter');
        container.scrollLeft -= 200;  
    };

    return (
        <div className="home-page" style={styles.container}>
            <Header onSearch={handleSearch} /> 
            
           
            <div style={styles.scrollFilterWrapper}>
                <div style={styles.scrollFilterContainer}>
                    <button style={styles.scrollButton} onClick={scrollLeft}>
                        &lt;
                    </button>
                    <div style={styles.scrollFilter} className="scrollFilter">
                        {keywords.map((keyword, index) => (
                            <button
                                key={index}
                                style={styles.keywordButton}
                                onMouseEnter={(e) => e.target.style.backgroundColor = styles.keywordButtonHover.backgroundColor}
                                onMouseLeave={(e) => e.target.style.backgroundColor = styles.keywordButton.backgroundColor}
                                onClick={() => handleKeywordClick(keyword)}
                            >
                                {keyword}
                            </button>
                        ))}
                    </div>
                    <button 
                        style={styles.scrollButton} 
                        onClick={scrollRight}
                    >
                        &gt;
                    </button>
                </div>
            </div>

           
            <div style={styles.container}>
                <h1 style={styles.title}>Items</h1>
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
                                    <button style={styles.editButton} onClick={() => handleUpdate(item.id)}>Save</button>
                                    <button style={styles.deleteButton} onClick={() => setEditingItem(null)}>Cancel</button>
                                </div>
                            ) : (
                                <div>
                                    <h2 style={styles.itemTitle}>{item.name}</h2>
                                    <p style={styles.itemDescription}>{item.description}</p>
                                    <div style={styles.buttonContainer}>
                                        <button style={styles.editButton} onClick={() => {
                                            setEditingItem(item.id);
                                            setUpdatedName(item.name);
                                            setUpdatedDescription(item.description);
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
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
        position: 'absolute',
        bottom: '10px',  
        width: '90%',  
        left: '50%',
        transform: 'translateX(-50%)',
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
    scrollFilterWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0',
        marginBottom: '30px',  
        position: 'relative', 
        zIndex: 10,
        flexDirection: 'column',
    },
    scrollFilterContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1100px',
    },
    scrollFilter: {
        display: 'flex',
        justifyContent: 'flex-start',   
        overflowX: 'auto',              
        flexGrow: 1,
        maxWidth: '90%',
        whiteSpace: 'nowrap',           
        scrollBehavior: 'smooth',       
        padding: '10px',                
        marginBottom: '20px',           
    },
    scrollButton: {
        backgroundColor: 'bisque',
        color: 'black',
        border: 'none',
        padding: '12px 18px',
        margin: '0 10px',
        cursor: 'pointer',
        fontSize: '20px',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
    },
    keywordButton: {
        backgroundColor: 'bisque',
        color: 'black',
        border: 'none',
        padding: '12px 18px',
        margin: '0 15px',   
        borderRadius: '25px', 
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
        fontSize: '14px',
    },
    keywordButtonHover: {
        backgroundColor: '#e3b191',
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

export default Home;
