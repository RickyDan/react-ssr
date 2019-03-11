import {
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/ActionType'

const initState = {
  token: '',
  error: null
}

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, token: action.token}
    case LOGIN_FAIL:
      return {...state, error: action.error}
    default:
      return state
  }
}
export default loginReducer
