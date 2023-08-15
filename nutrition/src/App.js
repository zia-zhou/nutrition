import React, {useState} from 'react';

import SearchBar from './components/SearchBar';
import FoodList from './components/foodList';

function App() {
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  return (
    <div>
      <h1>Food App</h1>
      <SearchBar onSearchTermChange={handleSearchTermChange}/>
      <FoodList searchTerm={searchTerm}/>
    </div>
  );
}

export default App;





 

