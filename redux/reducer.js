import { combineReducers } from 'redux';
import {
    FETCH_RANDOM_MEALS_BEGIN,
    FETCH_RANDOM_MEALS_SUCCESS,
    FETCH_RANDOM_MEALS_FAILURE,
    FETCH_SEARCH_MEAL_BY_NAME_BEGIN,
    FETCH_SEARCH_MEAL_BY_NAME_SUCCESS,
    FETCH_SEARCH_MEAL_BY_NAME_FAILURE,
    FETCH_MEALS_CATEGORIES_BEGIN,
    FETCH_MEALS_CATEGORIES_SUCCESS,
    FETCH_MEALS_CATEGORIES_FAILURE,
}
    from './actions';

// Initial state for random meal
const initialRandomMealState = {
    meals: null,
    loading: false,
    error: null,
}

const randomMealReducer = (state = initialRandomMealState, action) => {

    switch (action.type) {
        case FETCH_RANDOM_MEALS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_RANDOM_MEALS_SUCCESS:
            return {
                ...state,
                loading: false,
                meals: action.payload,
            };

        case FETCH_RANDOM_MEALS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                meals: null,
            };

        default:
            return state;
    }
}
// 

// Initial state for search recipe
const initialSearchRecipeState = {
    meals: null,
    loading: false,
    error: null,
}

const searchMealByNameReducer = (state = initialSearchRecipeState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_MEAL_BY_NAME_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case FETCH_SEARCH_MEAL_BY_NAME_SUCCESS:
            return {
                ...state,
                loading: false,
                meals: action.payload,
            }

        case FETCH_SEARCH_MEAL_BY_NAME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                meals: null,
            }

        default:
            return state;
    }
}

// Initial state for recipes categories
const initialMealCategoriesState = {
    category: null,
    loading: false,
    error: null,
}

const mealCategoriesReducer = (state = initialMealCategoriesState, action) => {
    switch (action.type) {
        case FETCH_MEALS_CATEGORIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case FETCH_MEALS_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload,
            }

        case FETCH_MEALS_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                category: null,
            }

        default:
            return state;
    }
}


const reducer = combineReducers({
    random_meal: randomMealReducer,
    search_meal: searchMealByNameReducer,
    meal_category: mealCategoriesReducer,
});

export default reducer