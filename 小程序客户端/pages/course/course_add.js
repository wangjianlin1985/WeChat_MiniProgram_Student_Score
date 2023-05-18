var utils = require("../../utils/common.js");
var config = require("../../utils/config.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    courseNo: "", //课程编号
    courseName: "", //课程名称
    coursePhoto: "upload/NoImage.jpg", //课程照片
    coursePhotoList: [],
    courseMemo: "", //课程简介
    teacherName: "", //任课教师
    courseCount: "", //总课时
    courseScore: "", //课程学分
    coursePlace: "", //上课教室
    loadingHide: true,
    loadingText: "网络操作中。。",
  },

  /*提交添加课程信息到服务器 */
  formSubmit: function (e) {
    var self = this;
    var formData = e.detail.value;
    var url = config.basePath + "api/course/add";
    utils.sendRequest(url, formData, function (res) {
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 500
      })

      //提交成功后重置表单数据
      self.setData({
        courseNo: "",
    courseName: "",
        coursePhoto: "upload/NoImage.jpg",
        coursePhotoList: [],
    courseMemo: "",
    teacherName: "",
    courseCount: "",
    courseScore: "",
    coursePlace: "",
        loadingHide: true,
        loadingText: "网络操作中。。",
      })
    });
  },

  //选择课程照片上传
  select_coursePhoto: function (e) {
    var self = this
    wx.chooseImage({
      count: 1,   //可以上传一张图片
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        self.setData({
          coursePhotoList: tempFilePaths,
          loadingHide: false
        });
        utils.sendUploadImage(config.basePath + "upload/image", tempFilePaths[0], function (res) {
          wx.stopPullDownRefresh()
          setTimeout(function () {
            self.setData({
              coursePhoto: res.data,
              loadingHide: true
            });
          }, 200);
        });
      }
    })
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

