// pages/index/child/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    model: Array,
    goods: Array,
    baseURL: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(data) {
      this.setData({
        active: data.currentTarget.dataset.item.id
      })
    }
  }
})
