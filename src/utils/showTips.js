import { message } from 'antd'

message.config({
  maxCount: 1
})

export default {
  success (msg) {
    message.success(msg)
  },
  error (msg) {
    message.error(msg)
  },
  warning (msg) {
    message.warning(msg)
  }
}
