import React from 'react'
import {
  Layout,
  Menu,
  Icon
} from 'antd'

const {
  Sider,
  Header
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
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header style = {{ background: '#fff', padding: 0 }} />
      </Layout>
    </Layout>
  )
}
