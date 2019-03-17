import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'antd'

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
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    fetchUser()
  }, [])
  function showVisible() {
    setVisible(true)
  }
  return (
    <div>
      <Button onClick={showVisible}>{visible ? 'true' : 'false'}</Button>
      <Table dataSource={dataSource} columns={columns} rowKey="id" bordered />
    </div>
  )
}
UserList.propTypes = {
  dataSources: PropTypes.array.isRequired,
  fetchUser: PropTypes.func.isRequired
}
export default UserList
