import { baseURL } from './comfig.js'

export default function (options) {
  return new Promise((resolve,reject) => {
    wx:wx.request({
      url: baseURL + options.url,
      data: options.data || {},
      header: options.header || '',
      method: options.method || 'GET',
      timeout: 5000,
      success: resolve,
      fail: reject
    })
  })
}