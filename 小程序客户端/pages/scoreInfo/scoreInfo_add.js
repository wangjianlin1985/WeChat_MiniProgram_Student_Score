var utils = require("../../utils/common.js");
var config = require("../../utils/config.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    scoreId: 0, //成绩编号
    studentNumber_Index: "0", //考察学生
    students: [],
    courseNo_Index: "0", //考察课程
    courses: [],
    score: "", //成绩得分
    evaluate: "", //学生评价
    loadingHide: true,
    loadingText: "网络操作中。。",
  },

  //初始化下拉框的信息
  init_select_params: function () { 
    var self = this;
    var url = null;
    url = config.basePath + "api/course/listAll";
    utils.sendRequest(url, null, function (res) {
      wx.stopPullDownRefresh();
      self.setData({
        courses: res.data,
      });
    });
    url = config.basePath + "api/student/listAll";
    utils.sendRequest(url, null, function (res) {
      wx.stopPullDownRefresh();
      self.setData({
        students: res.data,
      });
    });
  },
  //考察学生改变事件
  bind_studentNumber_change: function (e) {
    this.setData({
      studentNumber_Index: e.detail.value
    })
  },

  //考察课程改变事件
  bind_courseNo_change: function (e) {
    this.setData({
      courseNo_Index: e.detail.value
    })
  },

  /*提交添加成绩信息到服务器 */
  formSubmit: function (e) {
    var self = this;
    var formData = e.detail.value;
    var url = config.basePath + "api/scoreInfo/add";
    utils.sendRequest(url, formData, function (res) {
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 500
      })

      //提交成功后重置表单数据
      self.setData({
        scoreId: 0,
        studentNumber_Index: "0",
        courseNo_Index: "0",
    score: "",
    evaluate: "",
        loadingHide: true,
        loadingText: "网络操作中。。",
      })
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init_select_params();
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

