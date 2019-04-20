import * as React from 'react'
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

interface IBasicProps {
  children: React.ReactElement
}
interface IDashProps {
  component: React.ReactType
  rest?: object | null
}

const BasicLayout: React.FC<IBasicProps> = (props) => {
  const logOut = () => {
    localStorage.removeItem('username')
    props.children.props.history.push('/login')
  }
  return (
    <Layout style={{ minHeight: '100vh' }} className="layout-container">
       <Sider
        collapsed={false}>
         <div className="logo">
           <Menu
            inlineCollapsed={true}
            theme="dark"
            mode="inline">
             <Menu.Item key="1">
               <Icon type="user" />
               <span className="item-menu-text"><Link to="/users">用户管理</Link></span>
             </Menu.Item>
             <Menu.Item key="2">
               <Icon type="desktop" />
               <span className="item-menu-text"><Link to="/prods">商品管理</Link></span>
             </Menu.Item>
             <Menu.Item key="3">
                <Icon type="shopping-cart" />
                <span className="item-menu-text"><Link to="/orders">订单管理</Link></span>
             </Menu.Item>
            <Menu.Item key="4">
              <Icon type="pie-chart" />
              <span className="item-menu-text"><Link to="/count">数据统计</Link></span>
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
                <Menu.Item key="2" onClick={logOut}><Icon type="logout" /><span>退出登录</span></Menu.Item>
              </Menu>
              )}>
              <span className="userName">
                {localStorage.getItem('username')}<Icon type="down" />
              </span>
            </Dropdown>,
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {props.children}
        </Content>
       </Layout>
  </Layout>
  )
}

const DashboardRoute: React.FC<IDashProps> = ({component: Component, ...rest}) => {
  return (
    getAuth() ? (<Route {...rest} render={matchProps => (
      <BasicLayout>
        <Component {...matchProps} />  
      </BasicLayout>  
    )} />) : (<Redirect to="/login" />)
  )
}
export default DashboardRoute
