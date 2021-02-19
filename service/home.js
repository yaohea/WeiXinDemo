import request from './network.js'
// 轮播图
export function getHomeSwipe() {
  return request({
    url: '/home_swipe',
    method: 'GET'
  })
}

// 导航栏
export function getHomeNav() {
  return request({
    url: '/home_icon'
  })
}