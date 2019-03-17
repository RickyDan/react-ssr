import { put, takeLatest } from 'redux-saga/effects'
import http from '../../utils/http'
import {
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDERS_SAGA
} from './action'

function* getOrders(params) {
  try {
    const response = yield http.query('/orders', params.order)
    yield put({ type: GET_ORDERS_SUCCESS, dataSource: response.data })
  } catch (e) {
    yield put({ type: GET_ORDERS_FAIL })
  }
}

export function* watchGetOrders() {
  yield takeLatest(GET_ORDERS_SAGA, getOrders)
}
