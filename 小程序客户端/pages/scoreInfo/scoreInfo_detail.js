var utils = require("../../utils/common.js")
var config = require("../../utils/config.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    scoreId: 0, //成绩编号
    studentNumber: "", //考察学生
    courseNo: "", //考察课程
    score: "", //成绩得分
    evaluate: "", //学生评价
    loadingHide: true,
    loadingText: "网络操作中。。",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var self = this
    var scoreId = params.scoreId
    var url = config.basePath + "api/scoreInfo/get/" + scoreId
    utils.sendRequest(url, {}, function (scoreInfoRes) {
      wx.stopPullDownRefresh()
      self.setData({
        scoreId: scoreInfoRes.data.scoreId,
        studentNumber: scoreInfoRes.data.studentNumber.studentName,
        courseNo: scoreInfoRes.data.courseNo.courseName,
        score: scoreInfoRes.data.score,
        evaluate: scoreInfoRes.data.evaluate,
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

