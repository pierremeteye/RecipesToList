import { SHOWED_POPUP, HIDED_POPUP } from '../constants/action-types.js';

const popupReducer = (state=false, {type, payload}) => {
	switch (type) {
		case SHOWED_POPUP:
			return true
		case HIDED_POPUP:
			return false
		default:
			return state;
	}
}

export default popupReducer;