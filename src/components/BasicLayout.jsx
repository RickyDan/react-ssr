import React from 'react'
import {
  Layout,
  Menu,
  Icon
} from 'antd'
import UserList from '../containers/UserList'

const {
  Sider,
  Header,
  Content
} = Layout

export default function BasicLayout () {
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
        <Header style = {{ background: '#000', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <UserList />
        </Content>
      </Layout>
    </Layout>
  )
}
