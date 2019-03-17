import { combineReducers } from 'redux'
import user from '../pages/users/reducer'
import prod from '../pages/prods/reducer'
import login from '../pages/login/reducer'
import order from '../pages/users/reducer'

export default combineReducers({
  user,
  prod,
  order,
  login
})
