import { GET_PRODS_SUCCESS, GET_PRODS_FAIL } from '../actions/ActionType'

const initState = {
  isFetching: false,
  dataSource: [],
  error: null
}

const prodReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODS_SUCCESS:
      return {...state, dataSource: action.prods, isFetching: true}
    case GET_PRODS_FAIL:
      return {...state, error: action.error}
    default:
      return state
  }
}

export default prodReducer
