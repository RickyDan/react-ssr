import {
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../actions/ActionType'

const initState = {
  isFetching: false,
  dataSource: [],
  error: null
}

const prodsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {...state, isFetching: true, dataSource: action.user}
    case GET_USER_FAIL:
      return {...state, error: action.error}
    default:
      return state
  }
}
export default prodsReducer
