import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import '../assets/styles/hooks.less'

function Example () {
  const [count, setCount] = useState(0)
  useEffect (() => {
    console.log('after update count' + count)
  })
  console.log('count' + count)
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
