/* eslint-disable prettier/prettier */
import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {TEST} from './actionTypes';

function* getTest() {
  console.log('TEST SAGA');
  // const response = yield call(getMethod, data);
  // try {
  //   if (response.data.response_code === general_constant.success_status_code) {
  //     yield put(getDetailUserFulfilled(response));
  //   } else {
  //     //
  //     // Alert.alert("Gagal", response.data.description);
  //     yield put(getDetailUserReject(response));
  //   }
  // } catch (e) {
  //   Alert.alert("Sistem sedang berkendala", e.message);
  // }
}

export function* watchGetTest() {
  yield takeLatest(TEST, getTest);
}

function* TestSaga() {
  yield all([fork(watchGetTest)]);
}

export default TestSaga;
