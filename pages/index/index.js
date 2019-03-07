//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articles: [],
    params: ''
  },
  goToDetailPage (e) {
    wx.navigateTo({
      url: `../article/article?id=${e.currentTarget.dataset.id}`
    })
  },

  onLoad: function (p) {
    // console.log(JSON.stringify(p))
    // console.log(getCurrentPages())
    // this.setData({
    //   params: JSON.stringify(p)
    // })
    app.post('/api/articles', {}, 'GET')
      .then(res => {
        this.setData({
          articles: res
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
})
