import { GET_PRODS_SUCCESS, GET_PRODS_FAIL, ADD_PROD_SUCCESS, ADD_PROD_FAIL } from './action'

const initState = {
  isFetching: false,
  dataSource: [],
  error: null,
  message: ''
}

const prodReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODS_SUCCESS:
      return { ...state, dataSource: action.dataSource, isFetching: true }
    case GET_PRODS_FAIL:
    case ADD_PROD_FAIL:
      return { ...state, error: action.error }
    case ADD_PROD_SUCCESS:
      return { ...state, message: action.message }
    default:
      return state
  }
}

export default prodReducer
