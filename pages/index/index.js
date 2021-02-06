const app = getApp()
const myName = app.globalData.name

Page({
  data: {
    hh: 'hh',
    list: []
  },
  onLoad() {
    wx.request({
      url: 'http://127.0.0.1:3000/web/api/categories',
      success: (res) => {
        const {data} = res
        console.log(data);
        this.setData({
          list: data
        })
      }
    })
  },
  handle: function (e) {
    // console.log(myName);
    // console.log(e.detail.userInfo);
    // this.setData({
    //   hh: this.hh = e.detail.userInfo.nickName
    // })
  },
  onPullDownRefresh() {
    console.log('上拉');
  },
  onPageScroll(obj) {
    console.log(obj);
  }
})