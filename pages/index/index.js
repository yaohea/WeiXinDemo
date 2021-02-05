Page({
  data: {
    start: '开始',
    count: 0,
    user: [
      {
        name: '姚汕',
        age: 21
      },
      {
        name: '姚汕1',
        age: 22
      },
      {
        name: '姚汕2',
        age: 23
      }
    ]
  },
  handleBtn() {
    this.setData({
      count: this.data.count + 1
    })
  }
})