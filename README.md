# react 全家桶 demo
## 前言
>  本工程主要基于react16.8.x + redux + redux-saga + less + ES6/7 + webpack4.0 + axios + react-router4.0 + antd(3.x)实现的SPA后台管理系统模板。

>  如果觉得不错的话，请star一下吧 😊

## 关于我自己

>  使用技术： react + redux + redux-saga + less + ES6/7 + webpack4.0 + axios + react-router + antd(3.x)

> 后台数据是自己搭建的简单的koa服务

>  项目说明： 此项目是本人空余时间搭建的。希望大家提供宝贵的意见和建议，谢谢。

### 下载

```
# git clone

git clone git@github.com:RickyDan/react-ssr.git

cd react-ssr
```

### 安装
```bush

// 安装前请先确保已安装node和npm

// 安装成功后,再安装依赖，如果之前有用npm安装过，请先删掉node_modules
yarn install
```
### 运行
```bush
yarn run dev （开发版本，用于开发使用，热加载）
  
yarn run dist （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）
```
### 异常监控

sentry 上注册一个账号，也可以直接用github授权登录 [https://sentry.io](https://sentry.io)
然后在上面新建一个project, 选择 React 框架，项目新建好以后在Settings里
找到Client Key 子菜单，把 DNS 上的地址拷贝出来，配置在 Raven.config 
方法里即可完成初步的前端异常监控

### 访问
在浏览器地址栏输入[http://127.0.0.1:3000](localhost:3000)

### 目标功能
- [x] 登录页面
- [x] 全站布局
- [x] 登录态判断
- [x] 用户页面
- [x] 权限判断
- [x] 商品页面
- [x] 对接接口
- [ ] 优化代码，规范化写法
- [ ] 优化webpack 编译、打包速度
- [ ] 订单页面


## 如何使用react hooks api 编写组件
[参考官网](https://react.docschina.org/docs/hooks-intro.html)

官网例子
```js
# 类式组件
class Count extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    setCount () {
        this.setState({
            count: this.state.count + 1
        })
    }
    render () {
        return (
            <div>
                <Button onClick={() => this.setCount()}>Click</Button>
            </div>
        )
    }
}
```

hooks 的版本
```js
import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Button onClick={() => setCount(count + 1)}>Click</Button>
        </div>
    )
}
```
对比类式组件，hooks 的实现简洁明了，不用关心类式组件的this指向。react hooks 利用
了数组解构来做状态的替换，提供了一种写函数有状态组件的方式。

### 官方推出 hooks 的原因

1. 复用有状态的类式组件太困难。无状态组件虽然简洁高效，但是大部分场景下还是离不开
类式组件。而以 hooks 方式写组件后可以更方便的复用组件的业务逻辑

2. 降低react的学习he成本。写过类式组件的应该都会知道this的指向是很蹩脚的，这是因为
js 中的 this 是执行的时候才会确认指向，一不下心就容易出bug

3. 复用组件更方便了，HOC 模式虽然解决了组件复用的问题，但是会造成组件深层嵌套的问题 


