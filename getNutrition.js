import axios from 'axios';
import details from './firebase.json';
export default getNutrition = async (item) => {
  const { apiDetails } = details;
  let query = item;
  // console.log('item : ' + item);
  let url = 'https://api.calorieninjas.com/v1/nutrition?query=' + query;
  try {
    let response = await axios.get(url, {
      headers: {
        'X-Api-Key': apiDetails.apiKey,
        'Content-Type': 'application/json',
      },
    });
    // console.log(response.data.items);
    // console.log(response.data.items[0]);

    if (response.data.items.length > 0) return response.data.items[0];
    return null;
  } catch (e) {
    console.log(e);
  }
  return null;
};
