// pages/free_detail/free_detail.js
import util from '../../utils/util.js'
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    study: false,
    car: false,
    diu:false,
    shi:false,
    help:false,
    trade:false,
    free:false,
    id: "",
    item: "",
    cid: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      id: options.id,
      cid: options.cid
    })
    db.collection(options.cid).doc(this.data.id).get({
      success: res => {
        res.data.date = util.formatTime(res.data.date);
        if (res.data.pic_id == "") res.data.pic_id = "cloud://laffey98-6gzp75y12145056a.6c61-laffey98-6gzp75y12145056a-1307562378/default.webp";
        this.setData({
          item: res.data
        })
      }
    })
    //console.log(this.data);
    /* if */
    if (this.data.cid == "study") this.setData({
      study:true
    })
    if (this.data.cid == "car") this.setData({
      car:true
    })
    if (this.data.cid == "diu") this.setData({
      diu:true
    })
    if (this.data.cid == "shi") this.setData({
      shi:true
    })
    if (this.data.cid == "help") this.setData({
      help:true
    })
    if (this.data.cid == "free") this.setData({
      free:true
    })
    if (this.data.cid == "trade") this.setData({
      trade:true
    })
    wx.hideLoading()
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