import { SHOWED_POPUP, HIDED_POPUP } from '../constants/action-types.js';

const popupReducer = (state='no', {type, payload}) => {
	switch (type) {
		case SHOWED_POPUP:
			return 'yes'
		case HIDED_POPUP:
			return 'no'
		default:
			return state;
	}
}

export default popupReducer;