import { put, takeLatest } from 'redux-saga/effects'
import http from '../utils/http'
import {
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SAGA
} from '../actions/ActionType'

// worker saga
function *showUsers() {
  try {
    const response = yield http.request('/')
    yield put({ type: GET_USER_SUCCESS, user: response.data })
  } catch (e) {
    yield put({ type: GET_USER_FAIL })
  }
}

// watcher saga
export function* watchGetUsers() {
  yield takeLatest(GET_USER_SAGA, showUsers)
}
