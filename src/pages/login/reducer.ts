import { LOGIN_SUCCESS, LOGIN_FAIL } from './action'

interface IActionType {
  type: string
  token: string
  error: null | string
}

interface IStoreType {
  error: null | string
  token: string
}

const initState: IStoreType = {
  error: null,
  token: ''
}

const loginReducer = (state = initState, action: IActionType) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.token }
    case LOGIN_FAIL:
      return { ...state, error: action.error }
    default:
      return state
  }
}
export default loginReducer
