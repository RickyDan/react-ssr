import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Hooks from './components/Hooks'
import BasicLayout from './components/BasicLayout'
import NoMatch from './components/NoMatch'

export default function router () {
  return (
    <Router history={createHistory()}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/hooks" component={Hooks} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
