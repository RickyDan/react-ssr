import { put, takeLatest } from 'redux-saga/effects'
import http from '../utils/http'
import {
  GET_PRODS_SUCCESS,
  GET_PRODS_FAIL,
  GET_PRODS_SAGA,
  ADD_PROD_SUCCESS,
  ADD_PROD_FAIL,
  ADD_PROD_SAGA
} from '../actions/ActionType'

function *getProds(param) {
  try {
    const response = yield http.query('/prods', param.prod)
    yield put({ type: GET_PRODS_SUCCESS, dataSource: response.data })
  } catch (e) {
    yield put({ type: GET_PRODS_FAIL })
  }
}

function *addProd (param) {
  try {
    const response = yield http.create('/prod/add', 'post', param)
    yield put({ type: ADD_PROD_SUCCESS, info: response })
  } catch (e) {
    yield put({ type: ADD_PROD_FAIL })
  }
}

export function *watchGetProds() {
  yield takeLatest(GET_PRODS_SAGA, getProds)
}

export function *watchAddProd() {
  yield takeLatest(ADD_PROD_SAGA, addProd)
}
