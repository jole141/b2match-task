import dataReducer from './data.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({dataReducer});
export default allReducers;