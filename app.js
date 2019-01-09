//app.js
const URL = 'https://blog.ryanxchen.com'

App({
  globalData: {},
  post: (path, params, method) => {
    return new Promise((resolve, reject) => {
      wx.showLoading({ title: '加载中...' })
      wx.request({
        url: `${URL}${path}`,
        data: Object.assign({}, params),
        method: method || 'POST',
        success(res) {
          wx.hideLoading()
          resolve(res.data)
        },
        fail(error) {
          wx.hideLoading()
          reject(error)
        }
      })
    })
  }
})