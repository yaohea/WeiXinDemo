App({
  onLaunch: function () {
    console.log('初始化完毕');
  },
  onShow: function (options) {
    console.log('启动');
    wx.getUserInfo({
      success: (res) => {
        // console.log(res);
      }
    })
    // console.log(options);
  },
  onHide: function () {
    console.log('后台');
  },
  globalData: {
    name: 'yaoge',
    age: 22
  }
})