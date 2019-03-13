import React from 'react'
import { Router, Route, Switch, Redirect, Match } from 'react-router-dom'
import history from '../utils/history'
import DashboardRoute from '../components/BasicLayout'
import UserList from '../containers/UserList'
import Login from '../containers/Login'
import NoMatch from '../components/NoMatch'

export default function router () {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <DashboardRoute path="/users" component={UserList} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
