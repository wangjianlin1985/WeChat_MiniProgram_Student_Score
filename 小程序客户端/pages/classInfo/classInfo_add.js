var utils = require("../../utils/common.js");
var config = require("../../utils/config.js");

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

  //选择成立日期
  bind_beginDate_change: function (e) {
    this.setData({
      beginDate: e.detail.value
    })
  },
  //清空成立日期
  clear_beginDate: function (e) {
    this.setData({
      beginDate: "",
    });
  },

  /*提交添加班级信息到服务器 */
  formSubmit: function (e) {
    var self = this;
    var formData = e.detail.value;
    var url = config.basePath + "api/classInfo/add";
    utils.sendRequest(url, formData, function (res) {
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 500
      })

      //提交成功后重置表单数据
      self.setData({
        classNo: "",
    className: "",
    banzhuren: "",
    beginDate: "",
        loadingHide: true,
        loadingText: "网络操作中。。",
      })
    });
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
    var token = wx.getStorageSync('authToken');
    if (!token) {
      wx.navigateTo({
        url: '../mobile/mobile',
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})

