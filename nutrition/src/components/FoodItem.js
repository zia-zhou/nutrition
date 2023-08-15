import React from 'react'

export function FoodItem({food}) {
  return (
    <div>
      <div>Calories: {food.calories}</div>
      <div>Serving Size: {food.serving_size_g} g</div>
      <div>Total Fat: {food.fat_total_g} g</div>
      <div>Saturated Fat: {food.fat_saturated_g} g</div>
      <div>Protein: {food.protein_g} g</div>
      <div>Sodium: {food.sodium_mg} mg</div>
      <div>Potassium: {food.potassium_mg} mg</div>
      <div>Cholesterol: {food.cholesterol_mg} mg</div>
      <div>Total Carbohydrates: {food.carbohydrates_total_g} g</div>
      <div>Dietary Fiber: {food.fiber_g} g</div>
      <div>Sugar: {food.sugar_g} g</div>
     
    </div>
   
      
  )
}

