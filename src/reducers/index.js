import { combineReducers } from 'redux';
import articleReducer from './articleReducer.js';
import popupReducer from './popupReducer.js';
import selectedRecipe from './selectedRecipeReducer.js';
import shoppingListReducer from './shoppingListReducer.js';

export const rootReducer = combineReducers({
	articles: articleReducer,
	popup: popupReducer,
	selected_recipe: selectedRecipe,
	shopping_list: shoppingListReducer
})