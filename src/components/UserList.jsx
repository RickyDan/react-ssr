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
}, {
  title: '更新时间',
  dataIndex: 'updatedAt',
  key: 'updatedAt'
}]
const UserList = ({ dataSource, fetchUser }) => {
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} rowKey="id" bordered />
    </div>
  )  
}
export default UserList
