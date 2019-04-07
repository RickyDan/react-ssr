import React, { useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from '../utils/history'
import DashboardRoute from '../components/BasicLayout'
import UserList from '../pages/users'
import Prod from '../pages/prods'
import Order from '../pages/orders'
import Login from '../pages/login'
import PipeIndex from '../pages/index'
import NoMatch from '../components/NoMatch'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const router = () => {
  nprogress.start()
  useEffect(() => {
    nprogress.done()
  })
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
        <DashboardRoute path="/count" component={PipeIndex} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
export default router
