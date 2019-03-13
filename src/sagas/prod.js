import { put, takeLatest } from 'redux-saga/effects'
import http from '../utils/http'
import {
  GET_PRODS_SUCCESS,
  GET_PRODS_FAIL,
  GET_PRODS_SAGA
} from '../actions/ActionType'

function *getProds(param) {
  try {
    const response = yield http.request('/prods', 'get', param)
    yield put({ type: GET_PRODS_SUCCESS, dataSource: response.data })
  } catch (e) {
    yield put({ type: GET_PRODS_FAIL })
  }
}

export function *watchGetProds() {
  yield takeLatest(GET_PRODS_SAGA, getProds)
}
