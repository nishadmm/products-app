import { combineReducers } from 'redux';

import { products } from './Products';


const appReducer = combineReducers({
  products
});

export default appReducer