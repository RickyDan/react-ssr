import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import '../assets/styles/hooks.less'

const Hooks = ({ total, types, operate }) => {
  return (
    <span>
      <Button onClick={() => operate(types.toUpperCase())} type="primary">
        Btn
      </Button>
      <h1>{total}</h1>
    </span>
  )
}

Hooks.propTypes = {
  total: PropTypes.number,
  add: PropTypes.func,
  types: PropTypes.string
}
export default Hooks
