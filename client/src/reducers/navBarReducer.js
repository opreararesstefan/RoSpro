import { CONTACT, LEBENSLAUF, PORTFOLIO } from '../actions/types';
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
	actualState: CONTACT
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