import { connect } from 'react-redux'
import Prod from '../components/Prod'
import { GET_PRODS_SAGA } from '../actions/ActionType'

const mapStateToProps = (state) => ({
  prods: state.prod.prods
})

const mapDispatchToProps = (dispatch) => ({
  fetchProd: (prods) => dispatch({ type: GET_PRODS_SAGA, prods })
})

export default connect(mapStateToProps, mapDispatchToProps)(Prod)
