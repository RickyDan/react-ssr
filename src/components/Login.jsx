import React, { useState } from 'react'
import {
  Form, Icon, Input, Button
} from 'antd'
import '../assets/styles/login.less'

function LoginPage ({token, fetchLogin}) {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Form className="login-form">
      <Form.Item>
        <Input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          prefix={<Icon type="user" styl={{ color: 'rgba(0,0,0,.25)' }} />} 
          placeholder="用户名" />
      </Form.Item>
      <Form.Item>
        <Input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          prefix={< Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={() => fetchLogin({username, password})} className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginPage
