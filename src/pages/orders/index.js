import { connect } from 'react-redux'
import Order from './Order'
import { GET_ORDERS_SAGA } from './action'

const mapStateToProps = (state) => ({
  orders: state.order.dataSource
})

const mapDispatchToProps = (dispatch) => ({
  fetchOrder: (orders) => dispatch({ type: GET_ORDERS_SAGA, orders })
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
