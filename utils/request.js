// export default function (options) {
//   return new Promise((resolv,reject) => {
//     wx:wx.request({
//       url: '',
//       data: '',
//       header: '',
//       timeout: 5000,
//       method: 'GET',
//       success: 
//     })
//   })
// }
import { baseURL } from './config'

export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || "GET",
      success: resolve,
      fail: reject,
    })
  })
}