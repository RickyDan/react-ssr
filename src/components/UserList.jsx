import React, { useEffect } from 'react'
import { Table } from 'antd'

const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id'
}, {
  title: '用户名',
  dataIndex: 'username',
  key: 'username'
}, {
  title: '昵称',
  dataIndex: 'nickname',
  key: 'nickname'
}, {
  title: '创建时间',
  dataIndex: 'createdAt',
  key: 'createdAt'
}]
const UserList = ({ users, fetchUser }) => {
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div>
      <Table dataSource={users} columns={columns} rowKey="id" bordered />
    </div>
  )  
}
export default UserList
