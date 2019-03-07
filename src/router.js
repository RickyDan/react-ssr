import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './utils/history'
import Hooks from './components/Hooks'
import BasicLayout from './components/BasicLayout'
import Login from './components/Login'
import NoMatch from './components/NoMatch'

export default function router () {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
