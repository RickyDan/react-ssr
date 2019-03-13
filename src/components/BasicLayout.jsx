import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import {
  Layout,
  Menu,
  Icon
} from 'antd'
import getAuth from '../utils/auth'


const {
  Sider,
  Header,
  Content
} = Layout

const BasicLayout = ({children, ...rest}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
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
           </Menu>
         </div>
       </Sider>
      <Layout>
         <Header style = {{ background: '#000', padding: 0 }} />
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
