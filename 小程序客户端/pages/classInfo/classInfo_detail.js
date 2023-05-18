var utils = require("../../utils/common.js")
var config = require("../../utils/config.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    classNo: "", //班级编号
    className: "", //班级名称
    banzhuren: "", //班主任姓名
    beginDate: "", //成立日期
    loadingHide: true,
    loadingText: "网络操作中。。",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var self = this
    var classNo = params.classNo
    var url = config.basePath + "api/classInfo/get/" + classNo
    utils.sendRequest(url, {}, function (classInfoRes) {
      wx.stopPullDownRefresh()
      self.setData({
        classNo: classInfoRes.data.classNo,
        className: classInfoRes.data.className,
        banzhuren: classInfoRes.data.banzhuren,
        beginDate: classInfoRes.data.beginDate,
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  }

})

