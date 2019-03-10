export default {
  setCookie (name, value) {
    const days = 7
    const exp = new Date()
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = name + "=" + escape (value) + ";expires=" + exp.toGMTString()
  },
  getCookie(name) {
    let c = document.cookie
    if (c.length > 0) {
      let s = c.indexOf(name + '=')
      if (s !== -1) {
        s = s + name.length + 1
        let e = c.indexOf(';', s)
        if (e === -1) {
          e = c.length
        }
        return unescape(c.substring(s, e))
      }
    }
    return ''
  }
}
