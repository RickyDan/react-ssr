import { fork, all } from 'redux-saga/effects'
import { watchGetUsers } from './user'
import { watchGetProds, watchAddProd } from './prod'
import { watchAuthLogin } from './login'
import { watchGetOrders } from './order'

export default function* rootSaga() {
  yield all([
    fork(watchGetUsers),
    fork(watchGetProds),
    fork(watchAddProd),
    fork(watchGetOrders),
    fork(watchAuthLogin)
  ])
}
