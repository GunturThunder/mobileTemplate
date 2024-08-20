/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import Test from '../pages/Test';
import Auth from './pages/auth/reducer';
import AbsensiReducer from './pages/absensi/reducer';
const reducer = combineReducers({
  Test,
  Auth,
  AbsensiReducer
  
});

export default reducer;