import { combineReducers } from 'redux'
import user from './user'
import prod from './prod'
import login from './login'
import order from './order'

export default combineReducers({
  user,
  prod,
  order,
  login
})
