// pages/upload/upload.js
import util from '../../utils/util.js'
const db = wx.cloud.database()
Page({
  data: {
    study: true,
    car: false,
    shi: false,
    diu: false,
    help: false,
    free: false,
    trade: false,
    yes: false,
    picpath: "",
    load: false,
    picurl: "",
    type: "study",
    array: ['约自习', '拼车招募', '失物招领（我是失主）', '失物招领（我是拾主）', '悬赏互助', '二手交易', '自由信息'],
    objectArray: [
      {
        id: 0,
        name: 'study'
      },
      {
        id: 1,
        name: 'car'
      },
      {
        id: 2,
        name: 'diu'
      },
      {
        id: 3,
        name: 'shi'
      },
      {
        id: 4,
        name: 'help'
      },
      {
        id: 5,
        name: 'trade'
      },
      {
        id: 6,
        name: 'free'
      }
    ],
    index: 0,
  },

  bindPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      type: this.data.objectArray[e.detail.value].name,
      study: false,
      car: false,
      diu: false,
      shi: false,
      help: false,
      trade: false,
      free: false,
    })
    /* if */
    if (this.data.objectArray[e.detail.value].name == 'study') this.setData({
      study: true
    })
    if (this.data.objectArray[e.detail.value].name == 'car') this.setData({
      car: true
    })
    if (this.data.objectArray[e.detail.value].name == 'shi') this.setData({
      shi: true
    })
    if (this.data.objectArray[e.detail.value].name == 'diu') this.setData({
      diu: true
    })
    if (this.data.objectArray[e.detail.value].name == 'trade') this.setData({
      trade: true
    })
    if (this.data.objectArray[e.detail.value].name == 'free') this.setData({
      free: true
    })
    if (this.data.objectArray[e.detail.value].name == 'help') this.setData({
      help: true
    })
    //console.log(this.data);
  },

  choosepic(res) {
    wx.chooseImage({
      complete: (res) => {
        this.setData({
          picpath: res.tempFilePaths[0],
          yes: true
        })
      },
    })
  },

  btsub(re) {
    wx.showLoading({
      title: '提交中',
    })
    //console.log(res);
    if (this.data.yes == true) {
      wx.cloud.uploadFile({
        cloudPath: Date.now() + ".jpg",
        filePath: this.data.picpath,
      }).then(res => {
        this.setData({
          picurl: res.fileID,
          load: "ture"
        })
        var value = re.detail.value;
        value.date = new Date();
        console.log(this.data);
        value.pic_id = this.data.picurl;
        console.log(value);
        db.collection(this.data.type).add({
          data: value
        }).then(res => { })
        wx.hideLoading()
      })
    }
    else {
      var value = re.detail.value;
      value.date = new Date();
      console.log(this.data);
      value.pic_id = this.data.picurl;
      console.log(value);
      db.collection(this.data.type).add({
        data: value
      }).then(res => { })
      wx.hideLoading()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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