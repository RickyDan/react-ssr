import { fork, all } from 'redux-saga/effects'
import { watchGetUsers } from './user'
import { watchGetProds } from './prod'
import { watchAuthLogin } from './login'

export default function* rootSaga() {
  yield all([
    fork(watchGetUsers),
    fork(watchGetProds),
    fork(watchAuthLogin)
  ])
}
