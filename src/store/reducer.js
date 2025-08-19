/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import Test from './pages/test/reducer';
import ProductReducer from './pages/Product/reducer';
const reducer = combineReducers({
  Test,
  ProductReducer
  
});

export default reducer;