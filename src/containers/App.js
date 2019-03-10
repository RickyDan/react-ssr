import React from 'react'
import Hooks from './Hooks'
import Caculator from './Caculator'
import SelectType from './SelectType'

const numArr = Array.from({length: 100},(v,k) => k)
const App = () => (
  <div>
    <Caculator arr={numArr} whichNum="firstNum" />
    <SelectType arr={[
      {value: 'plus', type: '+'},
      {value: 'reduce', type: '-'},
      {value: 'multiply', type: '*'},
      {value: 'divide', type: '/'}
    ]} initType="+" />
    <Caculator arr={numArr} whichNum="secondNum" />
    <Hooks />
  </div>
)

export default App
