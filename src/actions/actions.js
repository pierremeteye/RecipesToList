import { API_REQUEST,
	ADD_ARTICLE,
	SHOWED_POPUP,
	HIDED_POPUP,
	RECIPE_SELECTED,
	SHOPPING_LIST
} from '../constants/action-types.js'

export const addArticle = article => ({
	type: ADD_ARTICLE,
	payload: {
		popup: article
	}
})

export const popupOpenAction = showed => ({
	type: SHOWED_POPUP,
	payload: showed
})

export const popupCloseAction = hided => ({
	type: HIDED_POPUP,
	payload: hided
})

export const selectedRecipe = index => ({
	type: RECIPE_SELECTED,
	payload: index
})

export const shoppingList = obj => ({
	type: SHOPPING_LIST,
	payload: obj
})

export default function apiRequest () {
	return dispatch => {
		fetch("https://api.myjson.com/bins/6mp2c")
		.then(res => res.json())
		.then(
			(result) => {
				dispatch({type:API_REQUEST, payload: result})
			},
			(error) => {
				console.log(error);
			}
			);
	}

}