var utils = require("../../utils/common.js")
var config = require("../../utils/config.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    courseNo: "", //课程编号
    courseName: "", //课程名称
    coursePhoto: "upload/NoImage.jpg", //课程照片
    coursePhotoUrl: "",
    coursePhotoList: [],
    courseMemo: "", //课程简介
    teacherName: "", //任课教师
    courseCount: "", //总课时
    courseScore: "", //课程学分
    coursePlace: "", //上课教室
    loadingHide: true,
    loadingText: "网络操作中。。",
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
          loadingHide: false, 
        });

        utils.sendUploadImage(config.basePath + "upload/image", tempFilePaths[0], function (res) {
          wx.stopPullDownRefresh()
          setTimeout(function () {
            self.setData({
              coursePhoto: res.data,
              loadingHide: true
            })
          }, 200)
        })
      }
    })
  },

  //提交服务器修改课程信息信息
  formSubmit: function (e) {
    var self = this
    var formData = e.detail.value
    var url = config.basePath + "api/course/update"
    utils.sendRequest(url, formData, function (res) {
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 500
      })

      //服务器修改成功返回列表页更新显示为最新的数据
      var pages = getCurrentPages()
      var courselist_page = pages[pages.length - 2];
      var courses = courselist_page.data.courses
      for(var i=0;i<courses.length;i++) {
        if(courses[i].courseNo == res.data.courseNo) {
          courses[i] = res.data
          break
        }
      }
      courselist_page.setData({courses:courses})
      setTimeout(function () {
        wx.navigateBack({})
      }, 500) 
    })
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

})

