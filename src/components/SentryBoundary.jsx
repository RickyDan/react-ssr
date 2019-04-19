import React from 'react'
import Raven from 'raven-js'

export default class SentryBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    // 发送错误消息
    Raven.captureException(error, { extra: errorInfo })
  }

  render() {
    return this.props.children
  }
}
