/* eslint-disable prettier/prettier */
import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {GET_DETAIL, TEST} from './actionTypes';
import { getMethod } from '../../method';
import { getDetailFulfilled, getDetailRejected } from './actions';
import { Alert } from 'react-native';

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

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

function* getDetail({payload: data}:any) {
  console.log('TEST SAGA getDetail');
  const response:ResponseGenerator = yield call(getMethod, data);
  try {
    if (response.status === 200) {
      yield put(getDetailFulfilled(response));
    } else {
      //
      // Alert.alert("Gagal", response.data.description);
      yield put(getDetailRejected(response));
    }
  } catch (e:any) {
    Alert.alert("Sistem sedang berkendala", e.message);
  }
}

export function* getDetailWatch() {
  yield takeLatest(GET_DETAIL, getDetail);
}

function* ProductSaga() {
  yield all([
    fork(watchGetTest),
    fork(getDetailWatch),
  ]);
}

export default ProductSaga;
