import React from 'react'
import { Button, Table } from 'antd'

const columns = [{
  title: '用户名',
  dataIndex: 'username',
  key: 'username'
}, {
  title: '昵称',
  dataIndex: 'nickname',
  key: 'nickname'
}, {
  title: '权限',
  dataIndex: 'auth',
  key: 'auth'
}]
const UserList = ({ users, fetchUser }) => (
  <div>
    <Table dataSource={users} columns={columns} />
    <Button onClick={fetchUser}>Click me</Button>
  </div>
)
export default UserList
