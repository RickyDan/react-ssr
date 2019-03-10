import axios from 'axios'
import cookie from './cookie'

class Ajax {
  constructor () {
    this.$http = axios
    this.baseUrl = 'http://localhost:8000'
    this.$http.interceptors.request.use(
      config => {
        let token = cookie.getCookie('csrf_token')
        config.headers.common['authorization'] = token
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )

    this.$http.interceptors.response.use(
      response => {
        return response
      },
      err => {
        if (err.response) {
          switch (err.response.status) {
            case 404:
              console.log('请求发生404错误')
              break
            case 500:
              console.log('请求发生500错误')
              break
            case 504:
              console.log('请求超时')
              break
            default:
              break
          }
          return Promise.reject(err.response.data) // 返回接口错误信息
        }
      }
    )
  }

  request (url, method, params) {
    url = this.baseUrl + url
    return this.$http({
      method: method,
      url: url,
      data: params
    }).then(response => {
      return Promise.resolve(response.data)
    }).catch(err => {
      return Promise.reject(err)
    })
  }
}
export default new Ajax()
