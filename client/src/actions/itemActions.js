import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
	return {
		type: GET_ITEMS
	};
};

export const deleteItem = (id) => {
	return {
		type: DELETE_ITEMS,
		payload: id
	};
};

export const addItem = (id) => {
	return {
		type: ADD_ITEMS,
		payload: item
	};
};
