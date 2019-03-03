import React, { useState } from 'react'
import { Button } from 'antd'
import './hooks.less'

function Example () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p className="hooks">You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  )
}
export default Example
