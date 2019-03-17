import { GET_ORDERS_SUCCESS, GET_ORDERS_FAIL } from './action'

const initState = {
  isFetching: false,
  dataSource: [],
  error: null,
  message: ''
}

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return { ...state, dataSource: action.orders, isFetching: true }
    case GET_ORDERS_FAIL:
      return { ...state, error: action.error }
    default:
      return state
  }
}

export default orderReducer
