import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'

const Option = Select.Option

function SelectNum ({ arr, whichNum, selectNum }) {
  return (
    <Select defaultValue={arr[0]} style={{ width: 120 }} onChange={(value) => selectNum(whichNum, value)}>
      {arr.map((item) => (
        <Option value={item} key={item}>{item}</Option>
      ))}
    </Select>
  )
}

SelectNum.propTypes = {
  arr: PropTypes.array,
  whichNum: PropTypes.string,
  selectNum: PropTypes.func
}
export default SelectNum
