import React, {useState} from 'react';

import SearchBar from './components/SearchBar';
import FoodDisplay from './components/FoodDisplay';

function App() {
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
 



  return (
    <div>
       <h1 style={{ textAlign: 'center' }}>Nutrition Statistics</h1>
     <SearchBar onSearchTermChange={handleSearchTermChange}/>
    

    
      <FoodDisplay searchTerm={searchTerm}/>
    </div>
  );
}

export default App;





 

