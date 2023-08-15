import axios from 'axios';

export const searchFood = async (term) => {
    const response = await axios.get('https://api.calorieninjas.com/v1/nutrition?query=', {
        headers: {
            'X-Api-Key': '4Q99YA7jj2xCz9oDMbTy3w==3dYmCnQE0543jbON'
        },

        params:{
            query:term,
        }
    })
   //console.log( response.data.items[0])
    return response.data.items[0]
}

