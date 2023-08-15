import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FoodItem } from './FoodItem'
function FoodList({searchTerm}) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:3005/foods')
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [searchTerm]);


  const renderedFoods = foods.map((food) =>{
    return <FoodItem key = {food.id} food = {food} />
  })
  return (
    <div>
      <h2>Food List</h2>
      {renderedFoods}
    </div>
  );
}

export default FoodList;
