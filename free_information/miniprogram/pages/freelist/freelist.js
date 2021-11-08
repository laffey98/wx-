// pages/freelist/freelist.js
import util from '../../utils/util.js'
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid: "null",
    datalist: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    wx.showLoading({
      title: '提交中',
    })
    this.setData({
      cid: options.cid
    })
    db.collection(options.cid).get({
      success: res => {
        for (var j = 0; j < res.data.length; j++) {
          res.data[j].date = util.formatTime(res.data[j].date);
          if (res.data[j].pic_id == "") res.data[j].pic_id = "cloud://laffey98-6gzp75y12145056a.6c61-laffey98-6gzp75y12145056a-1307562378/default.webp"
        }
        this.setData({
          datalist: res.data
        })
      }
    })
    wx.hideLoading()
    //console.log(this.data);
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