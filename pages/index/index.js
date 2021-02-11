import request from '../../server/network.js'
Page({
  data: {
    title: [{id:0,name:'流行'},{id:1,name:'精选'},{id:2,name:'时尚'}]
  },
  handle(e) {
    console.log(e.detail);
  },
  onLoad: function (options) {
    request({
      url: 'http://127.0.0.1:3000/web/api/register',
      method: 'POST',
      data: {username: 'yaodad', password: '123456'}
    }).then(res => console.log(res)).catch(res => console.log(res))
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