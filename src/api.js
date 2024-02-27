import { API_URL } from "./config";
import axios from "axios";


const getMealById = async (mealId) => {
   return await axios.get(API_URL + `lookup.php?i=${mealId}`)
}

const getAllCategories = async () => {
    return await axios.get(API_URL + 'categories.php')
}

const getFilteredCategory = async (categoryName) => {
    return await axios.get(API_URL + `filter.php?c=${categoryName}`)
}




export { getMealById, getAllCategories, getFilteredCategory,  }