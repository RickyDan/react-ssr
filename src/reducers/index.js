import { combineReducers } from 'redux'
import user from './user'
import prod from './prod'
import login from './login'

export default combineReducers({
  user,
  prod,
  login
})
