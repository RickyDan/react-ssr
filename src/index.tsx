import * as React from 'react'
import { render} from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import Raven from 'raven-js'
import SentryBoundary from './components/SentryBoundary'
import rootState from './reducers'
import rootSaga from './sagas'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './assets/styles/index.less'

Raven.config('https://e31a17efa7d7479fa66e8d0835a3a4cf@sentry.io/1416058').install()
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, logger]
const store = createStore(rootState, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)
render(
  <Provider store={store}>
    <SentryBoundary>
      <App />
    </SentryBoundary>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
