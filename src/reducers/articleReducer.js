import { API_REQUEST, ADD_ARTICLE } from '../constants/action-types.js'

const articleReducer = (state=[], {type, payload}) => {
	switch (type) {
		case API_REQUEST:
			return payload
		case ADD_ARTICLE:
			return [...state, payload]
		default:
			return state;
	}
}

export default articleReducer;