import React, { useState, useEffect } from 'react'
import http from '../utils/http'
import {
  Layout,
  Menu,
  Icon
} from 'antd'

const {
  Sider,
  Header,
  Content
} = Layout

export default function BasicLayout () {
  const [userList, setUserList] = useState([])
  useEffect (() => {
    const data = http.request('/', 'get', { username: 'Rondo' })
  })
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
       collapsed={true}>
        <div className="logo">
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>用户管理</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>商品管理</span>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header style = {{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          内容
        </Content>
      </Layout>
    </Layout>
  )
}
