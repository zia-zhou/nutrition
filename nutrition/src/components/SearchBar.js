import React, { useState } from 'react';
import axios from 'axios';
import { searchFood } from '../Api';

function SearchBar({onSearchTermChange}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const searchData = await searchFood(searchTerm)
      console.log(searchData)
     
      await axios.post('http://localhost:3005/foods', searchData);

      onSearchTermChange(searchData)
     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
