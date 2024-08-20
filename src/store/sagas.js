/* eslint-disable prettier/prettier */
import {all} from 'redux-saga/effects';
import TestSaga from './pages/test/saga';

export default function* rootSaga() {
  yield all([
    TestSaga()
  ]);
}
