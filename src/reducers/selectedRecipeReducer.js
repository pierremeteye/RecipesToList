import { RECIPE_SELECTED } from '../constants/action-types.js'

const selectedRecipeReducer = (state = null, {type, payload}) => {
	switch (type) {
		case RECIPE_SELECTED:
			return payload
		default:
			return state;
	}
}

export default selectedRecipeReducer;