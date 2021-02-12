Page({
  data: {
    list: {
      name: 'yaoge',
      hobby: ['西瓜','苹果','香蕉']
    }
  },
  handle() {
    let data = this.data.list.hobby
    data.push('牛肉')
    let str = 'list.hobby'
    this.setData({
      [str]: data
    })
  }
})