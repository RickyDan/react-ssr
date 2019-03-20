import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
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
const UserList = React.memo(({ dataSource, fetchUser }) => {
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div>
      <Table className="list-info" dataSource={dataSource} columns={columns} rowKey="id" bordered />
    </div>
  )
})

UserList.propTypes = {
  dataSource: PropTypes.array.isRequired,
  fetchUser: PropTypes.func.isRequired
}
export default UserList
