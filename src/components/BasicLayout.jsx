import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import {
  Layout,
  Menu,
  Icon,
  Dropdown
} from 'antd'
import getAuth from '../utils/auth'
import '../assets/styles/basiclayout.less'


const {
  Sider,
  Header,
  Content
} = Layout

const BasicLayout = ({children}) => {
  return (
    <Layout style={{ minHeight: '100vh' }} className="layout-container">
       <Sider
        collapsed={true}>
         <div className="logo">
           <Menu theme="dark" mode="inline">
             <Menu.Item key="1">
               <Icon type="pie-chart" />
               <Link to="/users">用户管理</Link>
             </Menu.Item>
             <Menu.Item key="2">
               <Icon type="desktop" />
               <Link to="/prods">商品管理</Link>
             </Menu.Item>
             <Menu.Item key="3">
                <Icon type="shopping-cart" />
                <Link to="/orders">订单管理</Link>
             </Menu.Item>
           </Menu>
         </div>
       </Sider>
      <Layout>
        <Header style = {{ background: '#000', padding: 0 }}>
          <div className="user-info">
            <Dropdown
              trigger={["click"]}
              overlay={() => (
              <Menu>
                <Menu.Item key="1"><Icon type="setting" />个人设置</Menu.Item>
                <Menu.Item key="2"><Icon type="logout" />退出登录</Menu.Item>
              </Menu>
              )}>
              <span className="userName">
                {localStorage.getItem('username')}<Icon type="down" />
              </span>
            </Dropdown>,
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {children}
        </Content>
       </Layout>
  </Layout>
  )
}

const DashboardRoute = ({component: Component, ...rest}) => {
  return (
    getAuth() ? (<Route {...rest} render={matchProps => (
      <BasicLayout>
        <Component {...matchProps} />  
      </BasicLayout>  
    )} />) : (<Redirect to="/login" />)
  )
}
export default DashboardRoute
