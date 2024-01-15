import React, { useState } from 'react';

import { searchFood } from '../Api';

function SearchBar({onSearchTermChange}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const searchData = await searchFood(searchTerm)
      
      onSearchTermChange(searchData)
     
      
     
    } catch (error) {
      console.error('Error:', error);
    }

  };

  //inline css for convenience as this is a small project
  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    margin: '20px auto', 
  };

  const inputStyle = {
    marginRight: '10px',
    padding: '8px', 
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '300px', 
    boxSizing: 'border-box',
  };
  const buttonStyle = {
    padding: '10px', 
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff', 
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        style={inputStyle}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      
      <button style={buttonStyle} onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
