// pages/index/index.js
import { baseURL } from '../../utils/config'
import request from '../../utils/request'
const app = getApp()
const name = app.globalData.name
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: name,
    toggle: true,
    model: [
      {
        id: 0,
        name: 'zhangsan',
        age: 21,
        list: [
          {
            name: 'zhangsan',
            age: 21
          },
          {
            name: 'zhangsan',
            age: 21
          },
          {
            name: 'zhangsan',
            age: 21
          }
        ]
      },
      {
        id: 1,
        name: 'lisi',
        age: 22,
        list: [
          {
            name: 'lisi',
            age: 22
          },
          {
            name: 'lisi',
            age: 22
          },
          {
            name: 'lisi',
            age: 22
          }
        ]
      },
      {
        id: 2,
        name: 'wangwu',
        age: 23,
        list: [
          {
            name: 'wangwu',
            age: 23
          },
          {
            name: 'wangwu',
            age: 23
          },
          {
            name: 'wangwu',
            age: 23
          }
        ]
      }
    ],
    list: [
    ],
    baseURL:baseURL,
    goods: [
    ]
  },
  handle() {
    this.setData({
      title: this.data.title + 1,
      toggle: !this.data.toggle
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url: '/home_swipe'
    }).then(res => {
      const { data } = res
      this.setData({
        list: data
      })
    })
    request({
      url: '/home_list_all'
    }).then(res => {
      const {data} = res
      this.setData({
        goods: data
      })
      console.log(this.data.goods);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})