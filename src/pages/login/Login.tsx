import React, { useState } from 'react'
import {
  Form, Icon, Input, Button
} from 'antd'
import './login.less'

interface IProps {
  token: string
  fetchLogin: (userInfo: object) => void
}

interface IState {
  password: string
  username: string
}

const LoginPage: React.FC<IProps> = React.memo((props) => {
  const [loginInfo, setUserInfo] = useState<IState>({
    password: '',
    username: '',
  })

  return (
    <Form className="login-form">
      <Form.Item>
        <Input
          value={loginInfo.username}
          onChange={(e) => setUserInfo({...loginInfo, username: e.target.value})}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
      </Form.Item>
      <Form.Item>
        <Input
          type="password"
          value={loginInfo.password}
          onChange={(e) => setUserInfo({...loginInfo, password: e.target.value})}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={() => props.fetchLogin(loginInfo)} className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
})

export default LoginPage
