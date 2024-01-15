import React from 'react';

export function FoodItem({ food }) {

  if (!food) {
    return null; 
  }
  const itemStyle = {
    border: '1px solid #ccc',
    padding: '8px', 
    margin: '8px', 
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height:'300px',
    width:'350px'
    
    
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  };
  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    textTransform: 'capitalize'
  };

  return (
    <div style={containerStyle}>
    <div style={itemStyle}>
      <div style={labelStyle}> {food.name}</div>
      <div style={labelStyle}>Calories: {food.calories}</div>
      <div style={labelStyle}>Serving Size: {food.serving_size_g} g</div>
      <div style={labelStyle}>Total Fat: {food.fat_total_g} g</div>
      <div style={labelStyle}>Saturated Fat: {food.fat_saturated_g} g</div>
      <div style={labelStyle}>Protein: {food.protein_g} g</div>
      <div style={labelStyle}>Sodium: {food.sodium_mg} mg</div>
      <div style={labelStyle}>Potassium: {food.potassium_mg} mg</div>
      <div style={labelStyle}>Cholesterol: {food.cholesterol_mg} mg</div>
      <div style={labelStyle}>Total Carbohydrates: {food.carbohydrates_total_g} g</div>
      <div style={labelStyle}>Dietary Fiber: {food.fiber_g} g</div>
      <div style={labelStyle}>Sugar: {food.sugar_g} g</div>
    </div>
    </div>
  );
}
