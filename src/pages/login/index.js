import { connect } from 'react-redux'
import Login from './Login'
import { LOGIN_SAGA } from './action'

const mapStateToProps = (state) => ({
  token: state.login.token
})

const mapDispatchToProps = (dispatch) => ({
  fetchLogin: (action) => dispatch({ type: LOGIN_SAGA, action })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
