import request from '../../server/network.js'
Page({
  data: {
    title: [{ id: 0, name: '流行', list: ['第一', '第一', '第一'] }, { id: 1, name: '精选', list: ['第二', '第二', '第二'] }, { id: 2, name: '时尚', list: ['第三', '第三', '第三'] }],
    active: 0,
    activeData: 0
  },
  handle(e) {
    this.setData({
      active: e.target.dataset.data.id,
      activeData: e.target.dataset.data.id
    })
  },
  onLoad: function (options) {
    // request({
    //   url: 'http://127.0.0.1:3000/web/api/register',
    //   method: 'POST',
    //   data: {username: 'yaodad', password: '123456'}
    // }).then(res => console.log(res)).catch(res => console.log(res))
    // wx.request({
    //   url: 'http://127.0.0.1:3000/web/api/register',
    //   method: 'POST',
    //   data:{
    //     username: 'qweasd',
    //     password: '123456'
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   }
    // })
  }
})