import { SHOPPING_LIST } from '../constants/action-types.js'

const shoppingListReducer = (state={}, {type, payload}) => {
	switch (type) {
		case SHOPPING_LIST:
			return {...state, ...payload}
		default:
			return state;
	}
}

export default shoppingListReducer;