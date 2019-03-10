import { combineReducers } from 'redux'
import operate from './caculate'
import selectType from './select'

export default combineReducers({
  operate,
  selectType
})
