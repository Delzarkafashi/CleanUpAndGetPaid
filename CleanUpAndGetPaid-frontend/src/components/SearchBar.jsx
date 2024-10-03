import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for items..."
        style={styles.searchInput}
      />
    </div>
  );
};

// Styles 
const styles = {
  searchInput: {
    padding: '10px',
    width: '70%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default SearchBar;
