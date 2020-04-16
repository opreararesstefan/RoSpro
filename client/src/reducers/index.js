import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import navBarReducer from './navBarReducer';

export default combineReducers({
	navBarTab: navBarReducer,
	item: itemReducer
})
