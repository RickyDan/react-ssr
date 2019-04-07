import { connect } from 'react-redux'
import Prod from './Prod'
import { GET_PRODS_SAGA, ADD_PROD_SAGA, DELETE_PROD_SAGA } from './action'

const mapStateToProps = (state) => ({
  prods: state.prod.dataSource
})

const mapDispatchToProps = (dispatch) => ({
  fetchProd: (prod) => dispatch({ type: GET_PRODS_SAGA, prod }),
  addProd: (prod) => dispatch({ type: ADD_PROD_SAGA, prod }),
  deleteProd: (prod) => dispatch({ type: DELETE_PROD_SAGA, prod })
})

export default connect(mapStateToProps, mapDispatchToProps)(Prod)
