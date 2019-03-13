import React, { useEffect } from 'react'
import { Table } from 'antd'

const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id'
}, {
  title: '商品名',
  dataIndex: 'prodname',
  key: 'prodname'
}, {
  title: '价格',
  dataIndex: 'price',
  key: 'price'
}, {
  title: '库存',
  dataIndex: 'count',
  key: 'count'
}, {
  title: '示例图片',
  dataIndex: 'prodImg',
  key: 'prodImg'
}, {
  title: '创建时间',
  dataIndex: 'createdAt',
  key: 'createdAt'
}]
const Prod = ({ prods, fetchProd }) => {
  useEffect(() => {
    fetchProd()
  }, [])
  return (
    <div>
      <Table dataSource={prods} columns={columns} rowKey="id" bordered />
    </div>
  )
}
export default Prod
