import { connect } from 'react-redux'
import UserList from '../components/UserList'
import { GET_USER_SAGA } from '../actions/ActionType'

const mapStateToProps = (state) => ({
  dataSource: state.user.dataSource
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (users) => dispatch({ type: GET_USER_SAGA, users })
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
