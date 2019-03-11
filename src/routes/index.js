import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import AuthRoute from './privateRoute'
import history from '../utils/history'
import BasicLayout from '../components/BasicLayout'
import Login from '../containers/Login'
import NoMatch from '../components/NoMatch'

export default function router () {
  return (
    <Router history={history}>
      <Switch>
        <AuthRoute path="/" exact component={BasicLayout} />
        <Route path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
