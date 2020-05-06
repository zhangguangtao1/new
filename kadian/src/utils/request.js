import axios from 'axios'
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
// 获取token
const token = window.sessionStorage.getItem("token");
// 创建axios实例
const service = axios.create({
  baseURL: "https://www.vvideo.cn/",
  // withCredentials: true,
  timeout: 5000 // 超时时间
})

// axios拦截器，发起请求之前header里面加入token字段
service.interceptors.request.use(
  config => {
    config[content-type] = 'application/json';
    if (token) {
      config.headers['X-Token'] = token
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data

    // 如果返回字段不是20000，就让其返回false
    if (res.code !== 1) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 处理异常，比如token过期，token异常，在其他客户端登录等其他情况
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 重新登录
        MessageBox({
          title: '提示',
          message: '你已登出，是否重新登录',
          showCancelButton: true
        }).then(() => {
          this.$router.push("/login");
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast({
      message: error.message,
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
