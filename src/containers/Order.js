import { connect } from 'react-redux'
import Order from '../components/Order'
import { GET_ORDERS_SAGA } from '../actions/ActionType'

const mapStateToProps = (state) => ({
  orders: state.order.dataSource
})

const mapDispatchToProps = (dispatch) => ({
  fetchOrder: (order) => dispatch({ type: GET_ORDERS_SAGA, order })
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
