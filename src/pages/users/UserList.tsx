import React, { useEffect } from 'react'
import { Table } from 'antd'

interface IProps {
  dataSource: object[]
  fetchUser: () => void
}
const columns = [{
  dataIndex: 'id',
  key: 'id',
  title: 'id'
}, {
  dataIndex: 'username',
  key: 'username',
  title: '用户名',
}, {
  dataIndex: 'nickname',
  key: 'nickname',
  title: '昵称'
}, {
  dataIndex: 'createdAt',
  key: 'createdAt',
  title: '创建时间'
}, {
  dataIndex: 'updatedAt',
  key: 'updatedAt',
  title: '更新时间'
}]
const UserList: React.FC<IProps> = React.memo(({ dataSource, fetchUser }) => {
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div>
      <Table className="list-info" dataSource={dataSource} columns={columns} rowKey="id" bordered={true} />
    </div>
  )
})

export default UserList
