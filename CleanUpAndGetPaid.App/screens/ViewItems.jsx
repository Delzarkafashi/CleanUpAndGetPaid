import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, Picker } from 'react-native';

const ViewItems = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedPrice, setUpdatedPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); 

    const categories = [
        'Fordon', 'Elektronik', 'Möbler', 'Kök', 'Sport', 'Böcker', 'Kläder',
        'Smycken', 'Leksaker', 'Hemelektronik', 'Skor', 'Väskor', 'Trädgård',
        'Verktyg', 'Musikinstrument'
    ];

    useEffect(() => {
        fetch('http://localhost:5162/items')
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setFilteredItems(data);
            })
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
    };

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

    const handleUpdate = (id) => {
        const updatedItem = {
            name: updatedName,
            description: updatedDescription,
            price: parseFloat(updatedPrice),
            category: selectedCategory
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
            setEditingItem(null);
        })
        .catch(error => {
            console.error('Error updating item:', error.message);
        });
    };

   
    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
           
            <TextInput
                style={styles.searchInput}
                placeholder="Search items..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />

            <Text style={styles.title}>Available Items</Text>
            {filteredItems.map((item) => (
                <View key={item.id} style={styles.itemCard}>
                    {editingItem === item.id ? (
                        <View>
                            <TextInput
                                value={updatedName}
                                onChangeText={setUpdatedName}
                                placeholder="Update Name"
                                style={styles.input}
                            />
                            <TextInput
                                value={updatedDescription}
                                onChangeText={setUpdatedDescription}
                                placeholder="Update Description"
                                style={styles.textarea}
                                multiline
                            />
                            <TextInput
                                value={updatedPrice}
                                onChangeText={setUpdatedPrice}
                                placeholder="Update Price"
                                style={styles.input}
                                keyboardType="numeric"
                            />
                            <Picker
                                selectedValue={selectedCategory}
                                onValueChange={setSelectedCategory}
                                style={styles.input}
                            >
                                <Picker.Item label="Select Category" value="" />
                                {categories.map((category, index) => (
                                    <Picker.Item key={index} label={category} value={category} />
                                ))}
                            </Picker>
                            <View style={styles.editButtonContainer}>
                                <TouchableOpacity style={styles.editButton} onPress={() => handleUpdate(item.id)}>
                                    <Text style={styles.buttonText}>Save</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cancelButton} onPress={() => setEditingItem(null)}>
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.itemTitle}>{item.name}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                            <Text style={styles.itemCategory}>Category: {item.category}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.editButton} onPress={() => {
                                    setEditingItem(item.id);
                                    setUpdatedName(item.name);
                                    setUpdatedDescription(item.description);
                                    setUpdatedPrice(item.price.toString());
                                    setSelectedCategory(item.category);
                                }}>
                                    <Text style={styles.buttonText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                                    <Text style={styles.buttonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    searchInput: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        width: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,
        textAlign: 'center',
    },
    itemCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: 300,
        minHeight: 300,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginBottom: 20,
    },
    itemTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#555',
        marginBottom: 15,
    },
    itemPrice: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemCategory: {
        fontSize: 14,
        color: '#777',
        marginBottom: 10,
    },
    input: {
        padding: 10,
        marginBottom: 10,
        width: '100%',
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    textarea: {
        padding: 10,
        marginBottom: 10,
        width: '100%',
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        minHeight: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    editButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    editButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ViewItems;

