import { CONTACT, LEBENSLAUF, PORTFOLIO } from '../actions/types';

const initialState = {
	actualState: PORTFOLIO
}

const navBarReducer = function (state = initialState, action) {
	switch (action.type) {
		case CONTACT:
			return {
				...state,
				actualState: action.type,
			};
		case LEBENSLAUF:
			return {
				...state,
				actualState: action.type,
			};
		case PORTFOLIO:
			return {
				...state,
				actualState: action.type,
			}
		default:
			return state;
	}
}

export default navBarReducer;