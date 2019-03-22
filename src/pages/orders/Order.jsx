import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'antd'

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
  dataIndex: "createdAt",
  key: 'createdAt'
}]
const Order = React.memo((props) => {
  const { orders, fetchOrder } = props
  const [query] = useState({
    page: 1,
    pageSize: 10,
    prodName: '',
    orderNum: '',
    status: 1
  })
  const [count, setCount] = useState(1)
  useEffect(() => {
    fetchOrder(query)
  }, [query])
  return (
    <div className="order-page">
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>Btn</Button>
      <Table className="list-info" dataSource={orders} rowKey="id" bordered columns={columns} />
    </div>
  )
})

Order.propTypes = {
  orders: PropTypes.array.isRequired,
  fetchOrder: PropTypes.func.isRequired
}
export default Order
