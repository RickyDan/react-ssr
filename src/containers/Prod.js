import { connect } from 'react-redux'
import Prod from '../components/Prod'
import { GET_USER_SAGA } from '../actions/ActionType'

const mapStateToProps = (state) => ({
  users: state.user.users
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (users) => dispatch({ type: GET_USER_SAGA, users })
})

export default connect(mapStateToProps, mapDispatchToProps)(Prod)
