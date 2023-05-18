var utils = require("../../utils/common.js")
var config = require("../../utils/config.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    courseNo: "", //课程编号
    courseName: "", //课程名称
    coursePhotoUrl: "", //课程照片
    courseMemo: "", //课程简介
    teacherName: "", //任课教师
    courseCount: "", //总课时
    courseScore: "", //课程学分
    coursePlace: "", //上课教室
    loadingHide: true,
    loadingText: "网络操作中。。",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var self = this
    var courseNo = params.courseNo
    var url = config.basePath + "api/course/get/" + courseNo
    utils.sendRequest(url, {}, function (courseRes) {
      wx.stopPullDownRefresh()
      self.setData({
        courseNo: courseRes.data.courseNo,
        courseName: courseRes.data.courseName,
        coursePhoto: courseRes.data.coursePhoto,
        coursePhotoUrl: courseRes.data.coursePhotoUrl,
        courseMemo: courseRes.data.courseMemo,
        teacherName: courseRes.data.teacherName,
        courseCount: courseRes.data.courseCount,
        courseScore: courseRes.data.courseScore,
        coursePlace: courseRes.data.coursePlace,
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

