import React, { useState, useEffect } from 'react'
import { Table } from 'antd'

const columns = [{
  title: '订单号',
  dataIndex: 'orderNum',
  key: 'orderNum'
}, {
  title: '商品名',
  dataIndex: 'prodName',
  key: 'prodName'
}, {
  title: '订单状态',
  dataIndex: 'status',
  key: 'status'
}, {
  title: '订单总价',
  dataIndex: 'price',
  key: 'price'
}, {
  title: '创建时间',
  dataIndex: 'createdAt',
  key: 'createdAt'
}]
const Order = (props) => {
  const { orders, fetchOrder } = props
  const [query] = useState({
    page: 1,
    pageSize: 10,
    prodName: '',
    orderNum: '',
    status: 1
  })
  useEffect(() => {
    fetchOrder(query)
  }, [query])
  return (
    <div className="order-page">
      <Table dataSource={orders} rowKey="id" bordered columns={columns} />
    </div>
  )
}
export default Order
