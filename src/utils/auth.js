function isLogin () {
  return localStorage.getItem('username') ? true : false
}

export default isLogin
