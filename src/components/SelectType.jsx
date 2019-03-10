import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'

const Option = Select.Option

// 数字下拉组件
const SelectType = ({initType, arr, selectType}) => {
  return (
    <Select defaultValue={initType} style={{ width: 120 }} onChange={(value) => selectType(value)}>
      {arr.map((item, index) => (
        <Option value={item.value} key={index}>{item.type}</Option>
      ))}
    </Select>
  )
}

SelectType.propTypes = {
  initType: PropTypes.string,
  arr: PropTypes.array,
  selectType: PropTypes.func
}

export default SelectType
