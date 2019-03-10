import { fork, all } from 'redux-saga/effects'
import {
  watchGetUsers
} from './user'

export default function* rootSaga() {
  yield all([
    fork(watchGetUsers)
  ])
}
