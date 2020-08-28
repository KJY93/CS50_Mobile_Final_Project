import { getRandomRecipe, searchRecipes, getAllCategories } from '../services/api';

// Action types
// i. Random meal
export const FETCH_RANDOM_MEALS_BEGIN = 'FETCH_RANDOM_MEALS_BEGIN';
export const FETCH_RANDOM_MEALS_SUCCESS = 'FETCH_RANDOM_MEALS_SUCCESS';
export const FETCH_RANDOM_MEALS_FAILURE = 'FETCH_RANDOM_MEALS_FAILURE';

// ii. Search meal by name
export const FETCH_SEARCH_MEAL_BY_NAME_BEGIN = 'FETCH_SEARCH_MEAL_BY_NAME_BEGIN';
export const FETCH_SEARCH_MEAL_BY_NAME_SUCCESS = 'FETCH_SEARCH_MEAL_BY_NAME_SUCCESS';
export const FETCH_SEARCH_MEAL_BY_NAME_FAILURE = 'FETCH_SEARCH_MEAL_BY_NAME_FAILURE';

// iii. Get meals categories


// Async action creators
// i. To fetch random meal
export const randomMeal = () => async dispatch => {
    dispatch({ type: FETCH_RANDOM_MEALS_BEGIN });
    try {
        const random_meal = await getRandomRecipe();
        dispatch({ type: FETCH_RANDOM_MEALS_SUCCESS, payload: random_meal });
    } catch (err) {
        dispatch({ type: FETCH_RANDOM_MEALS_FAILURE, payload: err});
    }
};

// ii. To fetch recipe based on query
export const searchMealByName = (query) => async dispatch => {
    dispatch({type: FETCH_SEARCH_MEAL_BY_NAME_BEGIN})
    try {
        const search_meal = await searchRecipes(query)
        dispatch({type: FETCH_SEARCH_MEAL_BY_NAME_SUCCESS, payload: search_meal})
    } catch (err) {
        dispatch({ type: FETCH_SEARCH_MEAL_BY_NAME_FAILURE, payload: err})
    }
}