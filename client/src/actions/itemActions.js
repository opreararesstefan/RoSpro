import axios from 'axios';
import { CONTACT, LEBENSLAUF, PORTFOLIO, GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};

export const getItems = () => dispatch => {
	dispatch(setItemsLoading());
	axios
		.get('/api/items')
		.then(res =>
			dispatch({
				type: GET_ITEMS,
				payload: res.data
			})
		);
};

export const addItem = (item) => dispatch => {
	axios
		.post('/api/items', item)
		.then(res =>
			dispatch({
				type: ADD_ITEMS,
				payload: res.data
			})
		);
};

export const deleteItem = (id) => dispatch => {
	axios
		.delete('/api/items/' + id)
		.then(res =>
			dispatch({
				type: DELETE_ITEM,
				payload: id
			})
		);
};

export const contact = () => {
	return {
		type: CONTACT,
	}
};

export const lebenslauf = () => {
	return {
		type: LEBENSLAUF,
	}
};

export const portfolio = ()  => {
	return {
		type: PORTFOLIO,
	};
};