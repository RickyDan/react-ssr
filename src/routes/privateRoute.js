import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const AuthRoute = ({ component, path }) => {
  const auth = localStorage.getItem('username') ? true : false
  return (
    auth ? <Route path={path} component={component} /> : <Redirect to="login" />
  )
}

AuthRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}

export default withRouter(AuthRoute)
