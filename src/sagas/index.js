import { fork, all } from 'redux-saga/effects'
import { watchGetUsers } from './user'
import { watchAuthLogin } from './login'

export default function* rootSaga() {
  yield all([
    fork(watchGetUsers),
    fork(watchAuthLogin)
  ])
}
