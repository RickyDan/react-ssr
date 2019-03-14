import { connect } from 'react-redux'
import Prod from '../components/Prod'
import { GET_PRODS_SAGA, ADD_PROD_SAGA } from '../actions/ActionType'

const mapStateToProps = (state) => ({
  prods: state.prod.dataSource
})

const mapDispatchToProps = (dispatch) => ({
  fetchProd: (prods) => dispatch({ type: GET_PRODS_SAGA, prods }),
  addProd: (prod) => dispatch({type: ADD_PROD_SAGA, prod})
})

export default connect(mapStateToProps, mapDispatchToProps)(Prod)
