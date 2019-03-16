import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from '../utils/history'
import DashboardRoute from '../components/BasicLayout'
import UserList from '../containers/UserList'
import Prod from '../containers/Prod'
import Order from '../containers/Order'
import Login from '../containers/Login'
import NoMatch from '../components/NoMatch'

export default function router () {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/users" />
        </Route>
        <Route path="/login" component={Login} />
        <DashboardRoute path="/orders" component={Order} />
        <DashboardRoute path="/users" component={UserList} />
        <DashboardRoute path="/prods" component={Prod} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
