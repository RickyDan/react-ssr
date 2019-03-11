import { connect } from 'react-redux'
import Login from '../components/Login'
import { LOGIN_SAGA } from '../actions/ActionType'

const mapStateToProps = (state) => ({
  token: state.login.token
})

const mapDispatchToProps = (dispatch) => ({
  fetchLogin: (action) => dispatch({ type: LOGIN_SAGA, action })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
