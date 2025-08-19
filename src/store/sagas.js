/* eslint-disable prettier/prettier */
import {all} from 'redux-saga/effects';
import TestSaga from './pages/test/saga';
import ProductSaga from './pages/Product/saga';

export default function* rootSaga() {
  yield all([
    TestSaga(),
    ProductSaga()
  ]);
}
