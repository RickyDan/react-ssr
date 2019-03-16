import { put, takeLatest } from 'redux-saga/effects'
import http from '../utils/http'
import history from '../utils/history'
import showTips from '../utils/showTips'
import cookie from '../utils/cookie'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SAGA
} from '../actions/ActionType'

function *authLogin(param) {
  try {
    const res = yield http.create('/login', param.action)
    showTips.success(res.message)
    cookie.setCookie('csrf_token', res.token)
    localStorage.setItem('username', res.username)
    yield put({ type: LOGIN_SUCCESS, token: res.token })
    history.push('/')
  } catch (e) {
    showTips.error('登录失败')
    yield put({ type: LOGIN_FAIL })
  }
}

export function *watchAuthLogin () {
  yield takeLatest(LOGIN_SAGA, authLogin)
}
