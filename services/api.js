import axios from 'axios';
import { BASE_URL_PATH } from '../constants/Constants';

export let categories = [];

export const getAllCategories = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL_PATH}/categories.php`
        );
        categories = response.data.categories;
        return categories;
    } catch (err) {
        throw err;
    }
};

export const getRecipesByCategory = async strCategory => {
    try {
        const response = await axios.get(
            `${BASE_URL_PATH}/filter.php?c=${strCategory.toLowerCase()}`
        );
        return response.data.meals;
    } catch (err) {
        throw err;
    }
};

export const searchRecipes = async searchInput => {
    try {
        const response = await axios.get(
            `${BASE_URL_PATH}/search.php?s=${searchInput.toLowerCase()}`
        );

        const meal = response.data.meals;
        const recipeArr = [];
        meal.map((individualMeal) => {
            let individualRecipeIngredients = [];

            for (let i = 0; i <= 20; i++) {
                if (individualMeal[`strIngredient${i}`] && individualMeal[`strIngredient${i}`] !== '') {
                    individualRecipeIngredients.push({
                        ingredient: individualMeal[`strIngredient${i}`],
                        quantity: individualMeal[`strMeasure${i}`]
                    });                
                }
            }

            let recipe = {
                id: individualMeal.idMeal,
                recipeName: individualMeal.strMeal,
                category: individualMeal.strCategory,
                img: individualMeal.strMealThumb,
                instructions: individualMeal.strInstructions,
                ingredients: individualRecipeIngredients,
                type: individualMeal.strArea,              
            };

            recipeArr.push(recipe);
        });

        return recipeArr;

    } catch (err) {
        throw err;
    }
};

export const getRandomRecipe = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL_PATH}/random.php`
        );

        const meal = response.data.meals[0];
        const recipeIngredients = [];
        for (let i = 0; i <= 20; i++) {
            if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`] !== '') {
                recipeIngredients.push({
                    ingredient: meal[`strIngredient${i}`],
                    quantity: meal[`strMeasure${i}`]
                });                
            }
        };

        const mealRecipe = {
            id: meal.idMeal,
            recipeName: meal.strMeal,
            category: meal.strCategory,
            img: meal.strMealThumb,
            instructions: meal.strInstructions,
            ingredients: recipeIngredients,
            type: meal.strArea
        }

        return mealRecipe;
    } catch (err) {
        throw err;
    }
};

export const getRecipeById = async id => {
    try {
        const response = await axios.get(
            `${BASE_URL_PATH}/lookup.php?i=${id}`
        );

        const meal = response.data.meals[0];
        const recipeIngredients = [];
        for (let i = 0; i <= 20; i++) {
            if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`] !== '') {
                recipeIngredients.push({
                    ingredient: meal[`strIngredient${i}`],
                    quantity: meal[`strMeasure${i}`]
                });                
            }
        };

        const individualMealRecipe = {
            id: meal.idMeal,
            recipeName: meal.strMeal,
            category: meal.strCategory,
            img: meal.strMealThumb,
            instructions: meal.strInstructions,
            ingredients: recipeIngredients,
            type: meal.strArea
        }

        return individualMealRecipe;
    } catch (err) {
        throw err;
    }
};